/** @type {import('@docusaurus/types').DocusaurusConfig} */
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const math = require('remark-math');
const katex = require('rehype-katex');
module.exports = {
  title: 'Деливери менеджер',
  tagline: 'Кто это, задачи, обязанности, как им стать, карта развития',
  url: 'https://github.com',
  baseUrl: '/redesign/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Delivery-Manager',
  projectName: 'knowledgebase',
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "ru"],
      }),
    ],
  ],
  themeConfig: {
    metadata: [
      // TODO: потом убрать
      { name: 'robots', content: 'noindex'},
    ],
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
      copyright: `© 2006-${new Date().getFullYear()} АО «Тинькофф Банк»`,
      links: [
        {
          title: "О профессии",
          items: [
            {
              label: "Описание профессии",
              to: "/"
            },
            {
              label: "Анти-паттерны",
              to: "/"
            },
            {
              label: "Полезные материалы",
              to: "/"
            }
          ]
        },
        {
          title: "Компетенции",
          items: [
            {
              label: "Грейды",
              to: "/"
            }
          ]
        },
        {
          title: "Карта развития",
          items: [
            {
              label: "Управление изменениями",
              to: "/"
            },
            {
              label: "Управление людьми",
              to: "/"
            },
            {
              label: "Управление работой",
              to: "/"
            },
          ]
        },
        {
          title: "Профессиональное развитие",
          items: [
            {
              label: "Управление изменениями",
              to: "/"
            },
            {
              label: "Управление людьми",
              to: "/"
            },
            {
              label: "Управление работой",
              to: "/"
            },
          ]
        }
      ],
      logo: {
        src: "img/logo.svg",
        href: "/",
        alt: "",
        width: 160,
        height: 51,
      }
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/MRCUCUMBER1234/knowledgebase/tree/feature/redesign',
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
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  plugins: [],
};
