module.exports = {
  siteMetadata: {
    title: `Primer Docs`,
    name: `Primer Docs`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/epicatif/primer-doc-challenge`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/primer_io`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/universal-checkout"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
