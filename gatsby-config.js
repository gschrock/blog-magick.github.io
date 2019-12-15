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
        title: `The Big Leap`,
        imgUrl: `https://images-na.ssl-images-amazon.com/images/I/41mEEr0uXvL.jpg`,
        author: `Gay Hendricks`,
        sellerUrl: `https://www.amazon.com/Big-Leap-Conquer-Hidden-Level-ebook/dp/B0026772QU`
      },
      {
        title: `So You Want to Talk About Race`,
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
          },
          {
            title: `Tales of the Dying Earth`,
            author: `Jack Vance`,
            imgUrl: `https://images-na.ssl-images-amazon.com/images/I/513uhXL7r6L.jpg`,
            sellerUrl: `https://www.amazon.com/Tales-Dying-Earth-Including-Marvellous-ebook/dp/B01BKKVK20/ref=sr_1_3?keywords=dying+earth+jack+vance&qid=1576349573&s=books&sr=1-3`,
            review: `👍`
          },
          {
            title: `Elric: The Sailor on the Seas of Fate`,
            author: `Michael Moorcock`,
            imgUrl: `https://images-na.ssl-images-amazon.com/images/I/51jKNtiw6hL._SX324_BO1,204,203,200_.jpg`,
            sellerUrl: `https://www.amazon.com/Elric-Sailor-Seas-Michael-Moorcock/dp/057511360X/ref=pd_cp_14_2/137-9139909-1424924?_encoding=UTF8&pd_rd_i=057511360X&pd_rd_r=9bbc1b67-bd14-4cec-a43c-a05f852b13da&pd_rd_w=9hn3t&pd_rd_wg=eaUNd&pf_rd_p=0e5324e1-c848-4872-bbd5-5be6baedf80e&pf_rd_r=V45S9PYY908J05SG8MM5&psc=1&refRID=V45S9PYY908J05SG8MM5`,
            review: `👍`
          },
          {
            title: `Elric of Melnibone`,
            author: `Michael Moorcock`,
            imgUrl: `https://images-na.ssl-images-amazon.com/images/I/71QSVSATZ6L._SX280_BO1,204,203,200_.gif`,
            sellerUrl: `https://www.amazon.com/Elric-Melnibone-1-Michael-Moorcock/dp/0441203981/ref=sr_1_4?crid=3R9ZVGUR1YPUO&keywords=elric+of+melnibon%C3%A9&qid=1576349532&s=books&sprefix=elric+of+%2Cstripbooks%2C229&sr=1-4`,
            review: `👍`
          },
          {
            title: `Annihilation (The Southern Reach Trilogy)`,
            author: `Jeff Vandermeer`,
            imgUrl: `https://images-na.ssl-images-amazon.com/images/I/51VeF-ryTFL._SX337_BO1,204,203,200_.jpg`,
            sellerUrl: `https://www.amazon.com/Annihilation-Novel-Southern-Reach-Trilogy/dp/0374104093`,
            review: `👍`
          },
          {
            title: `Do The Work`,
            author: `Steven Pressfield`,
            imgUrl: `https://images-na.ssl-images-amazon.com/images/I/41nIyXQisOL._SX311_BO1,204,203,200_.jpg`,
            sellerUrl: `https://www.amazon.com/Do-Work-Overcome-Resistance-Your/dp/1936891379/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=`,
            review: `👍`
          },
          {
            title: `This is Marketing`,
            author: `Seth Godin`,
            imgUrl: `https://images-na.ssl-images-amazon.com/images/I/51UYILvuvtL._SX352_BO1,204,203,200_.jpg`,
            sellerUrl: `https://www.amazon.com/This-Marketing-Cant-Until-Learn/dp/0525540830`,
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
