import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Nebula',
  description: 'Nebula Documentation',

  head: [
    ['link', { rel: 'icon', href: 'https://files.catbox.moe/gl077v.png' }],
    ['script', {}, `
      function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }
      
      function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      }
      
      document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
      });
    `]
  ],

  themeConfig: {
    logo: 'https://files.catbox.moe/gl077v.png',
    // siteTitle: 'Nebula',
    
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YellowGregs/Nebula-Documentation' },
      { icon: 'discord', link: 'https://discord.gg/EvVT3xEw84' }
    ],

    sidebar: {
      '/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Closures', link: '/api/Closures' },
            { text: 'Cryptography', link: '/api/Cryptography' },
            { text: 'Debug', link: '/api/Debug' },
            { text: 'Drawing', link: '/api/Drawing' },
            { text: 'Environment', link: '/api/Environment' },
            { text: 'Filesystem', link: '/api/Filesystem' },
            { text: 'Instances', link: '/api/Instances' },
            { text: 'Metatables', link: '/api/Metatables' },
            { text: 'Miscellaneous', link: '/api/Miscellaneous' },
            { text: 'Actors', link: '/api/Actors' },
            { text: 'Reflection', link: '/api/Reflection' },
            { text: 'Scripts', link: '/api/Scripts' },
            { text: 'Signals', link: '/api/Signals' },
            { text: 'WebSocket', link: '/api/WebSocket' },
          ]
        }
      ]
    }
  }
});
