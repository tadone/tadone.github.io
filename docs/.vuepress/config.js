module.exports = {
  title: 'Tadone Vuepress',
  description: 'Tadone Vuepress',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  dest: 'vuepress',
  serviceWorker: true,
  themeConfig: {
    lastUpdated: 'Last Updated',
      nav: [
      { text: 'Home', link: '/' },
      { text: 'My GitHub', link: 'https://github.com/tadone' },
      ],
        sidebar: [
          {
            title: 'Cloud',
            collapsable: false,
            children: [
              '/cloud/aws',
              '/cloud/azure',
            ]
          },
          {
            title: 'Code',
            collapsable: false,
            children: [
              '/code/git',
              '/code/bash',
              '/code/python',
              '/code/python/list',
              '/code/python/class'
            ]
          },
          {
            title: 'DevOps',
            collapsable: false,
            children: [
              '/devops/cicd',
              '/devops/docker',
              '/devops/databases',
              '/devops/sql'
            ]
          },
          {
            title: 'Kubernetes',
            collapsable: false,
            children: [
              '/kubernetes/overview',
              '/kubernetes/kubectl',
              '/kubernetes/cheatsheet',              
              '/kubernetes/objects',
              '/kubernetes/ingress',
              '/kubernetes/extras',
              '/kubernetes/troubleshooting'
            ]
          },
          {
            title: 'Linux',
            collapsable: false,
            children: [
              '/linux/bash_shell',
              '/linux/linux_basics',
              '/linux/linux_metrics',
              '/linux/linux_tools'
            ]
          },
          {
            title: 'Other',
            collapsable: false,
            children: [
              '/other/markdown',
              '/other/yaml_json',
              '/other/setup'
            ]
          }
        ]
    }
}
