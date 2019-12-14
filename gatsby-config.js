module.exports = {
  siteMetadata: {
    title: `Blog Magick`,
    author: `Gabriel Schrock`,
    description: `A blog powered by Gatsby and Markdown`,
    siteUrl: `https://gschrock.github.io`,
    social: {
      github: `gschrock`,
      linkedIn: `gabrielschrock`,
      instagram: `wondertwinharmony`
    },
    books: [
      {
        title: `So you want to talk about race`,
        imgUrl: `https://images-na.ssl-images-amazon.com/images/I/41q8PrzTo0L._SX331_BO1,204,203,200_.jpg`,
        author: `Ijeoma Oluo`,
        sellerUrl: `https://www.amazon.com/You-Want-Talk-About-Race/dp/1580056776`
      },
      {
        title: `Gyo`,
        author: `Junji Ito`,
        imgUrl: `https://images-na.ssl-images-amazon.com/images/I/5186%2BC3pJCL.jpg`,
        sellerUrl: `https://www.amazon.com/dp/B07HBPX5ZS/ref=rdr_kindle_ext_tmb`
      },
      {
        title: `Delicious in Dungeon`,
        author: `Ryoko Kui`,
        imgUrl: `https://images-na.ssl-images-amazon.com/images/I/61UjfgvQDuL._SX346_BO1,204,203,200_.jpg`,
        sellerUrl: `https://www.amazon.com/Delicious-Dungeon-Vol-Ryoko-Kui/dp/0316471852`
      }
    ],
    finishedBooks: [
      {
        year: "2019",
        books: [
          {
            title: `Dune`,
            author: `Frank Herbert`,
            imgUrl: `https://images-na.ssl-images-amazon.com/images/I/41UZeCEKOBL._SX331_BO1,204,203,200_.jpg`,
            sellerUrl: `https://www.amazon.com/Dune-Chronicles-Book-1/dp/0441013597/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=`,
            review: `👍`
          }
        ]
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Starter Blog`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `content/assets/gatsby-icon.png`
    //   }
    // },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
