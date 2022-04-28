// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  title: 'EZChain Docs',
  tagline: 'Documentation and Tutorials for EZChain',
  url: 'https://docs.ezchain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'EZChain-core', // Usually your GitHub org/user name.
  projectName: 'ezchain-documents', // Usually your repo name.

  scripts: [
    // 'scripts/intercom-app.js',
    // 'scripts/intercom-scripts.js'
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/EZChain-core/ezchain-documents/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // googleAnalytics: {
        //   trackingID: '',
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/EZChain-OG-Image.png?force-reload-1',
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:description', content: 'EZChain is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality, and has the most validators securing its activity of any proof-of-stake protocol.'},
        {name: 'twitter:title', content:'Documentation and Tutorials for EZChain'}
      ],
      navbar: {
        title: '',
        logo: {
          alt: 'EZChain Logo',
          src: 'img/EZChain_Horizontal_Red.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://t.me/EZChainOfficia',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ezchainofficial',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/EZChainOfficial',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/EZChain',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCOppDzCtBigB7yWM3SFFUZA',
              },
              {
                label: 'Ecosystem',
                href: 'https://ecosystem.ezchain.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EZChain-core/ezchain-documents',
              }
            ],
          },
          {
            
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EZC Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'KFB5DO87NZ',
        apiKey: 'aff4f1bf2267fa3651f27850c2ec1c84',
        indexName: 'ezc',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
