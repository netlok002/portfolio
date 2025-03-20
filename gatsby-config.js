module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://trevgeis.netlify.app/`,
    // Your Name
    name: 'Trevor Geisler',
    // Main Site Title
    title: `Trevor Geisler | QA Automation`,
    // Description that goes under your name in main bio
    description: `QA Automation | DevOps Scrum Master`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/netlok002`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/trevgeis/`,
    // Content of the About Me section
    about: `A curiosity-driven servant leader with 10 years of experience involving ERP rules development, defect triage and resolution, CI/CD optimization, and DevOps training. 5+ years of experience working with ecommerce development teams, providing a unique background of agile coding practices and systems thinking.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Medication Lookup',
        description:
          'A data cleansing application for medicare patients the leverages the RxNorm API to normalize medication names and dosages.',
        link: 'https://github.com/netlok002/medication-lookup',
      },
      {
        name: 'Postman API Testing',
        description:
          'A collection of tests validating the Reqres.in API.',
        link: 'https://documenter.getpostman.com/view/11023022/2sAYkGJyRp',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Navispect',
        description: 'Software Developer, March 2025 - Present',
        link: 'https://www.navispect.com/about',
      },
      {
        name: 'Crown Castle',
        description: 'Scrum Master, April 2024 - January 2025',
        link: 'https://www.crowncastle.com/',
      },
      {
        name: 'Evergy',
        description: 'DevOps Scrum Master, July 2022 - April 2024',
        link: 'https://www.evergy.com/',
      },
      {
        name: 'HanesBrands, Inc',
        description: 'Scrum Master III for Champion, May 2015 - December 2017',
        link: 'https://www.champion.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, Python, SQL'
      },
      {
        name: 'Automation and Testing Tools',
        description:
          'Postman, Selenium, Puppeteer',
      },
      {
        name: 'Other',
        description: 'Agile/Scrum, Git, Power Automate, MongoDB, MySQL, Jira Admin, PowerBI, Slackbot (Chatops)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
