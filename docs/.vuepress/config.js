module.exports = {
  base: 'https://tadone.github.io/',
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Tadone VuePress'
    }
  },
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
              '/code/git'
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
              '/devops/kubernetes',
              '/devops/kubectl',
              '/devops/databases'
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
