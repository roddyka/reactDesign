module.exports = {
  siteMetadata: {
    title: `LiveTournaments`,
    description: `Learn how to create amazing events with our workshops. We host big events and you still get paid for it. Create your tournament, participants pay monthly amounts to be able to compete and part of that amount becomes a prize for the first placed.`,
    keywords: `tournaments, league of legends, minecraft, fortinite, battleroyale, games, online games`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-react.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'd4dyk2h07agw',
        accessToken: 'OObbq6sGzgr8lWEPieqd_uIDMEkLiSAGw0OdTlVih98'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
