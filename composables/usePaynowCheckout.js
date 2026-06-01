// Client-side PayNow headless checkout.
// Store is identified by the public x-paynow-store-id header; the secret management key is never used here.
// Flow: authenticate(username) -> customer_token (cached) -> createCheckout(productId) -> redirect to PayNow URL.
export function usePaynowCheckout() {
  const cfg = useAppConfig()
  const base = cfg.StoreApiBase
  const storeId = cfg.StoreId

  const TOKEN_KEY = 'pn_customer_token'
  const NAME_KEY = 'pn_customer_name'

  const isClient = () => typeof window !== 'undefined'
  const getToken = () => (isClient() ? localStorage.getItem(TOKEN_KEY) : null)
  const getName = () => (isClient() ? localStorage.getItem(NAME_KEY) : null)
  const setAuth = (token, name) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(NAME_KEY, name)
  }
  const clearAuth = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(NAME_KEY)
  }

  // Resolve a Minecraft Java username to a Customer token.
  async function authenticate(username) {
    const res = await $fetch(`${base}/v1/store/customer/auth`, {
      method: 'POST',
      headers: {
        'x-paynow-store-id': storeId,
        'Content-Type': 'application/json',
      },
      body: {platform: 'minecraft_java_name', id: username},
    })
    setAuth(res.customer_token, username)
    return res.customer_token
  }

  // Create a checkout session for a single product and return the URL to redirect to.
  async function createCheckout(productId, {returnUrl, cancelUrl} = {}) {
    const token = getToken()
    if (!token) throw new Error('not_authenticated')
    const res = await $fetch(`${base}/v1/checkouts`, {
      method: 'POST',
      headers: {
        Authorization: `Customer ${token}`,
        'Content-Type': 'application/json',
      },
      body: {
        // Ranks are subscriptions; set subscription:false per-line when one-time products are added.
        lines: [{product_id: productId, quantity: 1, subscription: true}],
        return_url: returnUrl,
        cancel_url: cancelUrl,
      },
    })
    return res.url
  }

  return {authenticate, createCheckout, getToken, getName, clearAuth}
}
