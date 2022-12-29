export default {
    title: 'hello piter',
    description: '喜喜',
    themeConfig: {
        siteTitle: 'pitter',
        logo: "/img/logo.png",
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
                    text: 'vue',
                    collapsible: true,
                    collapsed: true,
                    items: [
                      { text: 'renderer', link: '/arcticles/renderer' },
                      { text: 'essence-of-comp', link: '/arcticles/essence-of-comp' },
                      { text: 'h', link: '/arcticles/h' },
                      { text: 'renderer-advanced', link: '/arcticles/renderer-advanced' },
                      { text: 'renderer-diff', link: '/arcticles/renderer-diff' },
                      { text: 'renderer-patch', link: '/arcticles/renderer-patch' }, 
                      { text: 'stateful-component', link: '/arcticles/stateful-component' }, 
                      { text: 'vnode', link: '/arcticles/vnode' }, 
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