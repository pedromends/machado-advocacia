
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: "vercel"
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
      transpile: ['vuetify'],
    },
    css: [
        '@/assets/css/main.css',
        'vuetify/lib/styles/main.sass'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            viewport: 'width=device-width, initial-scale=1',
            title: 'Somos um escritório especializado em Administração de Passivos',
            charset: 'utf-8',
            meta: [
                { name: 'description', content: 'Somos um escritório especializado em Administração de Passivos' },
              ],
            // script: [
            //     {
            //         hid: 'gtmHead',
            //         innerHTML: `window.$crisp=[];window.CRISP_WEBSITE_ID="f514c5ba-e3f6-4a89-aea1-a64cd7dbb0b8";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
            //     },
            //     {
            //         hid: 'gtmHead',
            //         src: 'https://www.googletagmanager.com/gtag/js?id=G-L4GS6RH95B',
            //         async: true,
            //     },
            //     {
            //         hid: 'gtmHead',
            //         innerHTML: `window.dataLayer = window.dataLayer || [];
            //             function gtag(){dataLayer.push(arguments);}
            //             gtag('js', new Date());
                    
            //             gtag('config', 'G-L4GS6RH95B');`
            //     },
            // ]
        },
    },
    modules: [
        'nuxt-simple-robots',
        'nuxt-simple-sitemap',
        '@nuxtjs/i18n',
    ],
    i18n: {
        defaultLocale: 'pt',
        lazy: true,
        langDir: 'locales/',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json'
          },
          {
            code: 'pt',
            iso: 'pt-BR',
            file: 'pt.json'
          },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
          },
    },
    runtimeConfig: {
      public: {
        siteUrl: 'https://starvis.io',
      }
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
})
