export default {
    title: 'hello piter',
    description: '喜喜',
    themeConfig: {
        siteTitle: 'pitter',
        logo: "/logo.png",
        nav: [
            { text: 'Guide', link: '/arcticles/item-a' },
            { text: 'Configs', link: '/configs' },
            { text: 'Changelog', link: 'https://github.com/...' }
          ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        sidebar: {
            '/arcticles': [
                {
                    text: 'Section Title A',
                    collapsible: true,
                    collapsed: true,
                    items: [
                      { text: 'Item A', link: '/arcticles/item-a' },
                      { text: 'Item B', link: '/arcticles/item-b' },
                    ]
                  },
                  {
                    text: 'Section Title B',
                    collapsible: true,
                    collapsed: true,
                    items: [
                      { text: 'Item C', link: '/arcticles/item-c' },
                      { text: 'Item D', link: '/arcticles/item-d' },
                    ]
                  }
            ]
        }
    },
    
}