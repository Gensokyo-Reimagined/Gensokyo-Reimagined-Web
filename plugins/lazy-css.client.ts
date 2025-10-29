export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        const loadCSS = (href: string, id: string) => {
            if (document.getElementById(id)) return
            const link = document.createElement('link')
            link.id = id
            link.rel = 'stylesheet'
            link.href = href
            document.head.appendChild(link)
        }

        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
                loadCSS('/css/all.min.css', 'font-awesome-css')
                loadCSS('/css/twemoji-flags.min.css', 'twemoji-flags-css')
            })
        } else {
            //support older browser
            setTimeout(() => {
                loadCSS('/css/all.min.css', 'font-awesome-css')
                loadCSS('/css/twemoji-flags.min.css', 'twemoji-flags-css')
            }, 200)
        }
    }
})