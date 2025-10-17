export default defineNuxtPlugin(() => {
  if (process.client) {
    const loadCSS = (href: string, id: string) => {
      if (document.getElementById(id)) return

      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = href
      link.media = 'print' // Initially load as print to avoid blocking
      
      link.onload = function() {
        // @ts-ignore
        this.media = 'all' // Switch to all media types after load
      }
      
      document.head.appendChild(link)
    }

    // Load non-critical CSS after initial render
    window.addEventListener('load', () => {
      // Small delay to ensure critical content is rendered first
      setTimeout(() => {
        // Load Font Awesome
        loadCSS('/css/all.min.css', 'font-awesome-css')
        
        // Load Twemoji flags (only if language switcher is present)
        const langSwitcher = document.querySelector('[class*="twa"]')
        if (langSwitcher) {
          loadCSS('/css/twemoji-flags.min.css', 'twemoji-flags-css')
        }
      }, 100)
    })

    // Fallback for older browsers
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `
      <link rel="stylesheet" href="/css/all.min.css">
      <link rel="stylesheet" href="/css/twemoji-flags.min.css">
    `
    document.head.appendChild(noscript)
  }
})