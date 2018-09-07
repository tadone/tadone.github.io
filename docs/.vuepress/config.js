module.exports = {
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
          {
            text: 'Cloud',
            items: [
                { text: 'AWS', link: '/cloud/aws' },
                { text: 'Azure', link: '/cloud/azure' }
            ]
          },
          {
            text: 'DevOps',
            items: [
                { text: 'CI/CD', link: '/devops/cicd' },
                { text: 'Docker', link: '/devops/docker' },
                { text: 'Terminology', link: '/devops/terminology' },
                { text: 'Databases', link: '/devops/databases' }
            ]
          },
          {
            text: 'Code',
            items: [
                { text: 'Git', link: '/code/git' },
                { text: 'Python', link: '/code/python' },
                { text: 'Bash Scripting', link: '/code/bash' },
                { text: 'Markdown', link: '/code/markdown' },
                { text: 'YAML/JSON', link: '/code/yaml_json' }
            ]
          },
          {
            text: 'Linux',
            items: [
                { text: 'Shell (Bash)', link: '/linux/bash_shell' },
                { text: 'Basics', link: '/linux/linux_basics' },
                { text: 'Metrics', link: '/linux/linux_metrics' },
                { text: 'GNU Tools', link: '/linux/linux_tools' }
            ]
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: [
          {
            title: 'Home',
            collapsable: false,
            children: [
              '/'
            ]
          },
          {
            title: 'Code',
            collapsable: false,
            children: [
              '/code/bash',
              '/code/markdown',
              '/code/python',
              '/code/git'
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
          }
        ]
    }
}
