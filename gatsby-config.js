module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Ahmad ElSayed',
    // Main Site Title
    title: `Ahmad ElSayed | Developer`,
    // Description that goes under your name in main bio
    description: `FullStack Developer `,
    // Optional: Github account URL
    github: `https://github.com/Ackmed1337`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/elsayed-ahmad/`,
    // Resume Link
    resume: 'https://pdfhost.io/v/xsps6CdoX_Microsoft_Word_CV_AElSayed.pdf',
    // Content of the About Me section
    about: `A Developer currently a student at Deakin University and holds a Diploma and Certificate III in Information Technology while studying to complete a bachelor's. He has a keen interest in mechanical projects.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'CryptoTracker',
        description:
          ' Versatile simplistic Cryptocurrency Tracker based around the CoinBase API with three second interval times for updates ',
        link: 'https://github.com/Ackmed1337/CryptoTracker',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Officeworks',
        description: 'Retail Assistant, April 2016 - 2016',
        link: 'https://www.linkedin.com/company/officeworks/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), HTML, CSS, .Net, Python, Java, Node.js, Express.js, React, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, SQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Agile / Scrum, Zeplin',
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
