import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cloud Engineering Docs",
  description: "Documentation for Cloud Engineering",
  // Example localhost URLs live in the docs as content, not real links
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Cloud', link: '/cloud/' },
      { text: 'Kubernetes', link: '/kubernetes/overview' },
      { text: 'DevOps', link: '/devops/docker' },
      { text: 'Python', link: '/python/' },
      { text: 'Linux', link: '/linux/linux_basics' },
      { text: 'Other', link: '/other/setup' }
    ],

    sidebar: {
      '/cloud/': [
        {
          text: 'Cloud',
          items: [
            { text: 'Overview', link: '/cloud/' },
            { text: 'AWS', link: '/cloud/aws' },
            { text: 'Azure', link: '/cloud/azure' }
          ]
        }
      ],
      '/kubernetes/': [
        {
          text: 'Kubernetes',
          items: [
            { text: 'Overview', link: '/kubernetes/overview' },
            { text: 'Cheatsheet', link: '/kubernetes/cheatsheet' },
            { text: 'kubectl', link: '/kubernetes/kubectl' },
            { text: 'Configuration', link: '/kubernetes/configuration' },
            { text: 'Objects: Configs', link: '/kubernetes/objects_configs' },
            { text: 'Objects: Deployments', link: '/kubernetes/objects_deployments' },
            { text: 'Objects: Services & Ingress', link: '/kubernetes/objects_services_ingress' },
            { text: 'Objects: Volumes', link: '/kubernetes/objects_volumes' },
            { text: 'Cluster', link: '/kubernetes/cluster' },
            { text: 'Security', link: '/kubernetes/security' },
            { text: 'Troubleshooting', link: '/kubernetes/troubleshooting' }
          ]
        }
      ],
      '/devops/': [
        {
          text: 'DevOps',
          items: [
            { text: 'Docker', link: '/devops/docker' },
            { text: 'CI/CD', link: '/devops/cicd' },
            { text: 'Git', link: '/devops/git' },
            { text: 'Databases', link: '/devops/databases' },
            { text: 'SQL', link: '/devops/sql' },
            { text: 'WebDev', link: '/devops/webdev' },
            { text: 'Terminology', link: '/devops/terminology' }
          ]
        }
      ],
      '/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Setup', link: '/python/' },
            { text: 'Classes', link: '/python/class' },
            { text: 'Lists', link: '/python/list' },
            { text: 'File Handling', link: '/python/file_handling' },
            { text: 'JSON', link: '/python/json' }
          ]
        }
      ],
      '/linux/': [
        {
          text: 'Linux',
          items: [
            { text: 'Linux Basics', link: '/linux/linux_basics' },
            { text: 'Interactive Shell', link: '/linux/bash_shell' },
            { text: 'Bash Scripting', link: '/linux/bash' },
            { text: 'Linux Metrics', link: '/linux/linux_metrics' },
            { text: 'Linux Tools', link: '/linux/linux_tools' }
          ]
        }
      ],
      '/other/': [
        {
          text: 'Other',
          items: [
            { text: 'Setup', link: '/other/setup' },
            { text: 'HTTP', link: '/other/http' },
            { text: 'jq', link: '/other/jq' },
            { text: 'Markdown', link: '/other/markdown' },
            { text: 'YAML / JSON', link: '/other/yaml_json' },
            { text: 'Hexo', link: '/other/hexo_doc' },
            { text: 'Personal', link: '/other/personal' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tadone/tadone.github.io' }
    ]
  }
})
