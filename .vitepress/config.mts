import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fitzytec limited",
  description: "projects of fitzytec",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      copyright: 'Copyright © 2025 PJ Fitzpatrick'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opensourcepj' }
    ]
  }
})


