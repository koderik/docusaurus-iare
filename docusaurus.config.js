// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
//Fil för att ändra header och footer
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      "docusaurus-plugin-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  title: 'Sektionen för Industriell Ekonomi',
  tagline: 'Kungliga Tekniska Högskolan',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/indeklogowhite.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'sv',
    locales: ['en', 'sv'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/koderik/docusaurus-iare/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/koderik/docusaurus-iare/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //Headerns element
      navbar: {
        title: 'I-Sektionen KTH',
        logo: {
          alt: 'My Site Logo',
          src: 'img/indeklogo.svg',
          srcDark: 'img/indeklogowhite.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Nämnder',
          },
          { to: '/blog', label: 'Nyheter', position: 'left' },
          { to: '/business', label: 'Företag', position: 'left' },
          { to: '/section', label: 'Om sektionen', position: 'left' },
          { to: '/trygghet', label: 'Trygghetsfunktioner', position: 'left' },
          
          { 
            href: 'https://pubquery.se/',
            label: 'PubQuery', 
            position: 'right' 
          },
          
          {
            href: 'https://www.facebook.com/groups/1695683603989665',
            label: 'Facebook',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      //footerns element
      footer: {
        style: 'dark',
        links: [{title:"aight"}],
        copyright: `Copyright © ${new Date().getFullYear()} I-T gruppen.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
