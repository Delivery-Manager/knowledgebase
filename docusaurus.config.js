/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');
module.exports = {
  title: 'Деливери менеджер',
  tagline: 'Кто это, задачи, обязанности, как им стать, карта развития',
  url: 'https://delivery-manager.github.io',
  baseUrl: '/knowledgebase/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Delivery-Manager', // Usually your GitHub org/user name.
  projectName: 'knowledgebase', // Usually your repo name.
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    mermaid: {
      theme: { light: 'base', dark: 'dark' },
      options: {
        flowchart: {
          curve: 'monotoneX',
        },
        themeVariables: {
          'primaryColor': '#E6E9F6',
          'primaryTextColor': '#000000',
          'primaryBorderColor': '#E6E9F6',
          'lineColor': '#5E73E1'
        }
      }
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'DM Knowledge Base',
      logo: {
        alt: 'База знаний профессии Деливери менеджер',
        src: 'img/logo.svg',
      },
      items: [{
          type: 'doc',
          docId: 'profession/about',
          position: 'left',
          label: 'Документация',
        },
        { to: 'blog', label: 'Блог', position: 'left' },
        {
          href: 'https://github.com/delivery-manager/knowledgebase',
          label: 'Репозиторий',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© 2022-${new Date().getFullYear()} Delivery Manager`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/delivery-manager/knowledgebase/edit/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: true,
        },
        gtag: {
          trackingID: 'G-CNJ52NL21B',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  }, ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['ru', 'en'],
      },
    ],
  ],
};
