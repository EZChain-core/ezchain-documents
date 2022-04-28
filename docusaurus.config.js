// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // themes: [
  //   // ... Your other themes.
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       // ... Your options.
  //       // `hashed` is recommended as long-term-cache of index file is possible.
  //       hashed: true,
  //       // For Docs using Chinese, The `language` is recommended to set to:
  //       // ```
  //       language: ["en"],
  //       // ```
  //       blogDir: 'docs',
  //     },
  //   ],
  // ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: true,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "en",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        style: undefined,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        }
      }
    ],
  ],
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
                label: 'Telegram',
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
        // algolia: {
        //   appId: 'KFB5DO87NZ',
        //   apiKey: 'aff4f1bf2267fa3651f27850c2ec1c84',
        //   indexName: 'ezc',
        //   contextualSearch: true,
        // },
    }),
};

module.exports = config;
