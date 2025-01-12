import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Nebula - Documentation",
  description: "Nebula - Official Documentation",
  themeConfig: {
    logo: 'https://files.catbox.moe/gl077v.png',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'General', link: '/general/' },
      { text: 'About', link: '/about' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/' },
          ],
          collapsed: false
        },
        {
          text: 'General',
          items: [
            { text: 'Overview', link: '/general/' },
            { text: 'Random', link: '/general/random' },
            { text: 'Other', link: '/general/other' },
            { text: 'Test', link: '/general/test' } 
          ],
          collapsed: true
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YellowGregs/Nebula-Documentation' },
      { icon: 'discord', link: 'https://discord.gg/getnebula' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Nebula'
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://files.catbox.moe/gl077v.png' }]
  ],
  ignoreDeadLinks: true
})
