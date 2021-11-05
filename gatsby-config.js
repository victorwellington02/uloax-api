module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "uloax-api",
},
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckv72xouq4w3u01zd0c5p1ixx/master",
    },
  },
],
};
