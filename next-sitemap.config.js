// next-sitemap.js
const siteUrl = process.env.SITE_URL || 'https://www.cozey.com/';

const pagesAssets = {
  homepage: [
    '//images.ctfassets.net/z0vszzs4am30/7MM128LOeVZmtoLC03LQBd/1e9d990026440b7fd5c9d4248aab7244/MOBILE-Atmosphere.webp',
    '//images.ctfassets.net/z0vszzs4am30/671gfoEI2wJGA4NIruGdpV/4231e7d66a62275c9e4d187bdfed3f54/DESKTOP-Atmosphere.webp',
    '//images.ctfassets.net/z0vszzs4am30/4WRpbTKngWA54F2y2GUrp0/1612b3b9c9fb2a8fa90a22c1baad81b9/MOBILE-Hero__2_.webp',
    '//images.ctfassets.net/z0vszzs4am30/3cVKdqWvL0PFdmX80PolXV/77b7b99b14b3ff5a9f7947a8b31d242f/DESKTOP-Hero__2_.webp',
    '//images.ctfassets.net/z0vszzs4am30/4yeJOMOAlWj4Stdhh45H93/808cfcf2d34f7c98205b32f035dac448/MOBILE-OurCollections2-Ciello.webp',
    '//images.ctfassets.net/z0vszzs4am30/1OU8726LogKDIlXtcJr1Ep/fb951db8891a6b5358f5bc27ee6ce77f/DESKTOP-OurCollections2-Ciello.webp',
    '//images.ctfassets.net/z0vszzs4am30/7BHBZ3rZcelNmjEvPHh2E6/e86489f472e1c2eefa744be8a33bc96a/MOBILE-OurCollections3-Original.webp',
    '//images.ctfassets.net/z0vszzs4am30/4ng2qhxgh5hicMcz0h3pXK/81407331b3ea9571a5048cce4544f0dc/DESKTOP-OurCollections3-Original.webp',
    '//images.ctfassets.net/z0vszzs4am30/xgHycqdT43lswaeR43yby/c92a14221dd7de9ea2b0c6e28ad6041c/MOBILE-OurFamilyProducts-Tables.webp',
    '//images.ctfassets.net/z0vszzs4am30/4F68a8t6Xix3VRva8zG37i/32b947a72e82f83a51a2fe30f9ad9db0/DESKTOP-OurFamilyProducts-Tables.webp',
    '//videos.ctfassets.net/z0vszzs4am30/307IHtOcC6qYzON6rXmxr0/9ed0ff6d1615edb49c703babc39362c3/MOBILE-Video.mp4',
    '//videos.ctfassets.net/z0vszzs4am30/2kOsB33A9ze5oszfbgBWwI/0d0d618851387c996ee52489c66c4f58/DESKTOP-Video.mp4',
    '//images.ctfassets.net/z0vszzs4am30/1wcQV3GdS5Beclg0VsfvMQ/4ec1d2fe7a6a0fc02fed1b378d168e5a/Reviews.png',
    '//images.ctfassets.net/z0vszzs4am30/4RdikBzQs4itCsaeBSbwp0/5375e3bc70e849ad21e81a1e8b45a4a9/Fast-Delivery.png',
    '//images.ctfassets.net/z0vszzs4am30/5NhG84SkkeOmNF6gV2mySX/245b2931a07337a338a6f7c4800685dd/Fast-Delivery.png',
    '//images.ctfassets.net/z0vszzs4am30/3AeC7kRhmyzQAtjxNaQ1sd/6a42a03d8d37689cf0af2ab592c64bd9/Easy-Assembly.png',
    '//images.ctfassets.net/z0vszzs4am30/3Q8JW4OX7v8xWGhAMmMfbD/a92a5779cb45110ce5c48daeb75e4887/Canadian-Company.png',
    '//images.ctfassets.net/z0vszzs4am30/GqkLPUZrpaCrch6Izo5mh/5604fc572fb71c87fd64871bdd784225/MOBILE-FamilyProducts1.webp',
    '//images.ctfassets.net/z0vszzs4am30/51EUsf9s9LrI7dsPF5TUzQ/ab7c09542e6c27203bf35823c75ef356/MOBILE-FamilyProducts3.webp',
    '//images.ctfassets.net/z0vszzs4am30/4xETKPJ5lfk7980UUxSXuB/2d8f7afa36ba6eb23f56e309f7a5af57/DESKTOP-FamilyProducts3.webp',
    '//images.ctfassets.net/z0vszzs4am30/3sAWCqzwiycQvmuAB9hQXo/422833aa810f0a00fae18549842b1e6e/DESKTOP-FamilyProducts1.webp',
    '//images.ctfassets.net/z0vszzs4am30/dBRM8l3NyMWIacSyGWQuA/8df3a390f3602c579f02e4fb68464baa/DesktopAboutUs.webp',
    '//images.ctfassets.net/z0vszzs4am30/QMVDCHMzT2BXXxVnSCDE4/a5bcb1eb4af236bea55c6f3cbd6b93b0/MobileAboutUs.webp',
  ],
  about: [
    '//images.ctfassets.net/z0vszzs4am30/DLOAh1ESSBfAe0E92MH6Q/41bf26c89b76df1c44aa04afce1b7c72/Screenshot_2022-09-15_07_44_10.png',
    '//images.ctfassets.net/z0vszzs4am30/3VRivVykq5aEWhVXfVSxO0/5dc6757d0c474ae91dde2a83a9811a47/Careers_GPTWCertification_English.png',
    '//images.ctfassets.net/z0vszzs4am30/Lcxaz4SkaBX6jhDV7SRSW/387b6e960ef5c06a559bcf2bd60bfef4/Screenshot_2022-09-02_11_06_45.png',
    '//videos.ctfassets.net/z0vszzs4am30/24dWmxdhVJvnMVbsGgmF9i/f3fb557b57c803b79a86d3142137f578/30_Ang_16_9_TITLE.mov',
  ],
  originalCollection: [
    '//images.ctfassets.net/z0vszzs4am30/1FaCs1hlCHqXsCTRhXKmV3/b3a869306db262c69030a067187615e4/1_Desktop_Hero_TheOriginal.webp',
    '//images.ctfassets.net/z0vszzs4am30/2NKpZMMxVpcOZRLnr9ZbWc/1f319db120272636dd1021d8f70e5e3b/Screenshot_2022-09-15_at_02.47.55.png',
    '//images.ctfassets.net/z0vszzs4am30/6czwCamBzV4Gy366aZClna/abe91e2a748a820aea8447dcb3a9e7a9/1_Mobile_Hero_TheOriginal.webp',
    '//videos.ctfassets.net/z0vszzs4am30/011aqC4DrAidn6hBkG5GwP/010e561fc80707292c4b7b6955d2d723/Orginal_V2_en.mp4',
    '//images.ctfassets.net/z0vszzs4am30/6pDoLHgAlBVdnDwgJZDDd3/b5c422ab693cc5c3a0d6d912c77c8f0e/original-collection-design.webp',
    '//videos.ctfassets.net/z0vszzs4am30/MBQFdem7QmWDWGa2WfwHH/0af1b77939e3941e947af6790ef1faa5/Mashup_beauty_shots_1_1.mp4',
  ],
  cielloCollection: [
    '//images.ctfassets.net/z0vszzs4am30/26urEgKivRIVWexljQY1xg/93cc93db7ae5d99e6eedf6123061d92c/1_Desktop_Hero_Ciello.webp',
    '//images.ctfassets.net/z0vszzs4am30/2YHzyhAmwL38sKa729S87P/ce5ff6e2aff843b611c5d2154c07b0f5/1_Mobile_Hero_Ciello.png',
    '//videos.ctfassets.net/z0vszzs4am30/cTTaRmIG0Tj6eip4iGbzj/829bc3a73ae8d52720827b0e0d7698a8/Ciello_en.mp4',
    '//images.ctfassets.net/z0vszzs4am30/60gvXGbVPGlcLa55yXiqqi/e31f9aa5920c7bc72fa3cfdd1d024190/Screenshot_2022-08-22_at_23.56.29.png',
    '//images.ctfassets.net/z0vszzs4am30/3aBZnL8RSCAzUtxti9gDuS/71e2ab22711fea3f15b7f045cf31ca3f/ciello-collection-design.webp',
    '//videos.ctfassets.net/z0vszzs4am30/5P9DpZL3hD4PAq9dkzE8oV/c35e59fc96184112af1cdc83441c69d2/Lifestyle_Mashup_1x1_EN.mov',
  ],
  atmosphereCollection: [
    '//videos.ctfassets.net/z0vszzs4am30/1HcmyAoh74gwfPI6gfr6Nq/fe33a63990ff5533d6d8bb0eca98983c/KeyFeatures-Atmosphere-EN.mp4',
    '//videos.ctfassets.net/z0vszzs4am30/5RM6I4AHb7q4pTRzFfMjeV/7256c0de2a9807d7b1c6f0eef63c3429/KeyFeatures-Atmosphere-EN.mp4',
    '//images.ctfassets.net/z0vszzs4am30/6f3sriqdicbfNyDKkJv6iS/0e3e8cef224aedbd62cef96cfe578d09/MOBILE-Atmosphere-HERO.webp',
    '//images.ctfassets.net/z0vszzs4am30/1Me4rPEPChfkB95faxgdUT/d90a2156dfc519879a29f7d02f6caf7c/DESKTOP-Atmosphere-HERO.webp',
    '//images.ctfassets.net/z0vszzs4am30/60gvXGbVPGlcLa55yXiqqi/e31f9aa5920c7bc72fa3cfdd1d024190/Screenshot_2022-08-22_at_23.56.29.png',
    '//videos.ctfassets.net/z0vszzs4am30/5P9DpZL3hD4PAq9dkzE8oV/c35e59fc96184112af1cdc83441c69d2/Lifestyle_Mashup_1x1_EN.mov',
  ],
  mistralCollection: [
    '//videos.ctfassets.net/z0vszzs4am30/GNRoWPTLrXQOyXblqpVHN/77c5173b4059a041cac065b01306c3df/ENGLISH-CollectionVideo.mp4',
    '//videos.ctfassets.net/z0vszzs4am30/13xDOO99o8iV19pQDT64Bk/4e484059745b94146d14fcdeb1d31091/ENGLISH-CollectionVideo.mp4',
    '//images.ctfassets.net/z0vszzs4am30/6MD1lpfpulXvgn5wmBPvUA/b3299e861b62a759a9500b780ef26ab4/MOBILE-MistralHero.webp',
    '//images.ctfassets.net/z0vszzs4am30/1ZfNYUafNROHyXGf94CFJW/8126fd21a9b56d7236911b2a98b35cfc/DESKTOP-MistralHero.webp',
    '//videos.ctfassets.net/z0vszzs4am30/6idA980FfdFvu6416ogNDY/8f46b8c575cdb14209816cc83b00fc44/EN-Mistral-FeatureAnimation.mp4',
    '//images.ctfassets.net/z0vszzs4am30/60gvXGbVPGlcLa55yXiqqi/e31f9aa5920c7bc72fa3cfdd1d024190/Screenshot_2022-08-22_at_23.56.29.png',
    '//videos.ctfassets.net/z0vszzs4am30/5P9DpZL3hD4PAq9dkzE8oV/c35e59fc96184112af1cdc83441c69d2/Lifestyle_Mashup_1x1_EN.mov',
  ],
  cart: [
    '//images.ctfassets.net/z0vszzs4am30/11YVNgG2vtExCSYP3ZzJ0h/4aa28f7f01a814f99f92a0eef7f4b3be/Simone_crying.png',
  ],
  tablesCollection: [
    '//images.ctfassets.net/z0vszzs4am30/47Vce2gp02gyscGh6CxYM9/a56c979c776b72c14f83db2878f5fefa/Tables-Ciollection-LP3.webp',
    '//images.ctfassets.net/z0vszzs4am30/2Lh9iYgujT6V8ysxwOQv5w/476da3b893b7db1e56360c6eccfc1710/Tables-Ciollection-LP2.webp',
    '//images.ctfassets.net/z0vszzs4am30/bukXxAcvehTF0eEhaXqfg/391a7b70fa9ea87a4ad6dbe00cfb4df0/Tables-Ciollection-LP1.webp',
  ],
  consultations: [
    '//images.ctfassets.net/z0vszzs4am30/3cVKdqWvL0PFdmX80PolXV/77b7b99b14b3ff5a9f7947a8b31d242f/DESKTOP-Hero__2_.webp',
    '//images.ctfassets.net/z0vszzs4am30/ZR5hcv7cLTVGhwcULPJ3H/14ae7f966d44bae163c53ff610f3084d/1-DESKTOP-About1.webp',
    '//images.ctfassets.net/z0vszzs4am30/3vlaNB79oCL9EmJD8COgUa/3554f5ad88201956a538748f6fbce11a/2-DESKTOP-About2.webp',
    '//images.ctfassets.net/z0vszzs4am30/1lPhDfTeEwNxhwRq1BdeER/bcfb492840147cbb725ae5904c950159/3-DESKTOP-About3.webp',
  ],
  financing: [
    '//images.ctfassets.net/z0vszzs4am30/7JCbWyYzjoXEAFhvqKr8lt/b8199eff2700281190961a5348121678/Financing-1.webp',
    '//images.ctfassets.net/z0vszzs4am30/6kVBCP1vXF6HBep8eV6Wpu/b5ee247dcf17c677b03c572128529286/Ellipse_17.svg',
  ],
  inspirations: [
    '//images.ctfassets.net/z0vszzs4am30/5twM1hKzw93fI3gkl02JGV/c49ba87fb5ee80fed2f2a14014095299/1-Inspiration-Simone.webp',
    '//images.ctfassets.net/z0vszzs4am30/7KWJJnp1Kb9xwCLpXd9HFa/fd6a0043cbf6bd18c04deb642615dced/2-Inspiration-Toby.webp',
    '//images.ctfassets.net/z0vszzs4am30/6xQpRDD7QX48qXQBGCfk6x/86c375eae6049c2d68064fefa069ee3d/3-Inspiration-Chloe.webp',
    '//images.ctfassets.net/z0vszzs4am30/5BmQo7iXiEgNVT2dXXS7Zn/30a096ab38823ad74f24ff600bbd902d/4-Inspiration-Marvin.webp',
  ],
  atmosphereProduct: [
    '//images.ctfassets.net/z0vszzs4am30/5b57YxAQpeDolS4SeABE1r/310fc76d320a74c7e1f708bb17873b63/Capture_d_____cran__le_2023-03-15____20.54.31.png',
    '//videos.ctfassets.net/z0vszzs4am30/3EDGp6sgn9BTjmCnslLZFN/ff6438278f4dbf1c27e8ab511b130e1f/Carrousel7-Atmosphere-Washable.mp4',
    '//images.ctfassets.net/z0vszzs4am30/5urAfchnrZ2Nl02ZUmGfm3/4b6381640375df4fcee44b0c9e118910/Carrousel6-Atmosphere.webp',
    '//videos.ctfassets.net/z0vszzs4am30/2FSIiT8WrG2Si0EHXlZsJf/ecec5c1ebf2be8168feb29626af8db48/Carrousel2-Atmosphere-Collection-EN.mp4',
  ],
  mistralProduct: [
    '//images.ctfassets.net/z0vszzs4am30/0006-MIST-SF-3-OT-silvershade/c7e9cd4a47df6132005731a5de46532d/example.jpeg',
  ],
  accessoriesProduct: [
    'images.ctfassets.net/z0vszzs4am30/3wWfWoeTG8QH5XCs6GPyYB/e07ac64b3f802069ffaba00e9aa17c77/Multi__Accessories.jpg',
    'images.ctfassets.net/z0vszzs4am30/4Xetek20YXsRuebLFhV6qY/b8469f63c01623315c37601e7aee629f/tinywow_Square_Tile-2_7981135.webp',
    'images.ctfassets.net/z0vszzs4am30/4q1z8Lb6YINLLTv2pSoqFS/c1ed01d02dfef9d0eaf8fdb25a3ec869/Homepage-Our_Fam_of_Products-accessories__1_.webp',
  ],
  originalProduct: [
    '//videos.ctfassets.net/z0vszzs4am30/2x1Jez00zPwkwqebJDWUnr/92e21335906277cbff988104bbf04128/original-en.mp4',
    '//images.ctfassets.net/z0vszzs4am30/553Wz7t17UrigzTdeW9cDM/6ceac45dd5d78358fc053038a1a295f5/og-thumbnail-2.png',
  ],
  cielloProduct: [
    '//images.ctfassets.net/z0vszzs4am30/4PbyE0AUqRFeYpWNotDHdy/37077deafb14347ec78fa0e9876997a1/ciello-thumbnail-2.png',
    '//videos.ctfassets.net/z0vszzs4am30/4UQCpPDVfOrdKMYvSBFRcQ/142fc4896d40abd3296baa2540beb301/CIELLO-ENGLISH.mp4',
  ],
  refurbished: [
    '//images.ctfassets.net/z0vszzs4am30/7DEs5vlvsrVlkjRehHfxF8/6e426d589413472733ee0cba5ee00305/1_Mobile_Hero.png',
    '//images.ctfassets.net/z0vszzs4am30/3fxVqGybOcqvAgTf3xtGeN/ebd03f01ef1a5454d8d26f6c3945408f/1_Desktop_Hero.png',
  ],
  reviews: [
    '//images.ctfassets.net/z0vszzs4am30/2iyeW29wvWF0JXnkF3ZEcl/a5d2eb874e356a06a2b5255854b5f33e/21_Desktop_OurReviews_Press_ElleCanada.png',
    '//images.ctfassets.net/z0vszzs4am30/38ShNKfbt8sTo5rYq3wfk4/d43704acb77cc4f8fd0578bd27dd92c4/elle-logo.svg',
  ],
  shipping: [
    '//images.ctfassets.net/z0vszzs4am30/2cNvqkbjmF05wvIOMMVo77/1fd35dfc5a46a063e027c123847eba56/Simone.svg',
  ],
  seatingShop: [
    '//images.ctfassets.net/z0vszzs4am30/6w6GKTmKEP1Nlu2ASnum1j/b845cd2ad0a54e44502b6a71c3e1d00e/DESKTOP-CollectionBanner.webp',
    '//images.ctfassets.net/z0vszzs4am30/6yLyqBRDz98USNBsoHiSl9/292a023091ac969b4723ffcfc9fb1678/DESKTOP-Seating-Atmosphere.webp',
    '//images.ctfassets.net/z0vszzs4am30/7gCSIiTxGDZEOwC2x3tgUP/c53f4c6df7f0b8d1c7fdefef992782a1/MOBILE_Seating_Original.webp',
    '//images.ctfassets.net/z0vszzs4am30/69UZGH2ivRysf5I5oPdCiu/ad2480431ab72cd17a383be641435a26/MOBILE_Seating_Ciello.webp',
  ],
  tablesShop: [
    '//images.ctfassets.net/z0vszzs4am30/47Vce2gp02gyscGh6CxYM9/a56c979c776b72c14f83db2878f5fefa/Tables-Ciollection-LP3.webp',
    '//images.ctfassets.net/z0vszzs4am30/2Lh9iYgujT6V8ysxwOQv5w/476da3b893b7db1e56360c6eccfc1710/Tables-Ciollection-LP2.webp',
    '//images.ctfassets.net/z0vszzs4am30/bukXxAcvehTF0eEhaXqfg/391a7b70fa9ea87a4ad6dbe00cfb4df0/Tables-Ciollection-LP1.webp',
  ],
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  // exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    // additionalSitemaps: [`${siteUrl}server-sitemap.xml`],
  },
  // Default transformation function
  transform: async (config, path) => {
    let images = [];

    if (path === 'https://www.cozey.com') {
      images = pagesAssets.homepage.map(image => ({
        loc: {
          href: `https:${image}`,
        },
      }));
    } else if (path.includes('/about-cozey')) {
      images = pagesAssets.about.map(image => ({
        loc: {
          href: `https:${image}`,
        },
      }));
    } else if (path.includes('/collections/original')) {
      images = pagesAssets.originalCollection.map(image => ({
        loc: {
          href: `https:${image}`,
        },
      }));
    } else if (path.includes('/collections/ciello')) {
      images = pagesAssets.cielloCollection.map(image => ({
        loc: {
          href: `https:${image}`,
        },
      }));
    } else if (path.includes('/collections/atmosphere')) {
      images = pagesAssets.atmosphereCollection.map(image => ({
        loc: {
          href: `https:${image}`,
        },
      }));
    } else if (path.includes('/collections/mistral')) {
      images = pagesAssets.mistralCollection.map(image => ({
        loc: {
          href: `https:${image}`,
        },
      }));
    } else if (path.includes('/cart')) {
      images = pagesAssets.cart.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/tables')) {
      images = pagesAssets.tablesCollection.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/consultation')) {
      images = pagesAssets.consultations.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/financing')) {
      images = pagesAssets.financing.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/inspiration')) {
      images = pagesAssets.inspirations.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/seating/atmosphere')) {
      images = pagesAssets.atmosphereProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/seating/mistral')) {
      images = pagesAssets.mistralProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/seating/original')) {
      images = pagesAssets.originalProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/seating/ciello')) {
      images = pagesAssets.cielloProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/modules/atmosphere')) {
      images = pagesAssets.atmosphereProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/modules/mistral')) {
      images = pagesAssets.mistralProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/modules/original')) {
      images = pagesAssets.originalProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/modules/ciello')) {
      images = pagesAssets.cielloProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/product/accessories')) {
      images = pagesAssets.accessoriesProduct.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/refurbished')) {
      images = pagesAssets.refurbished.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/reviews')) {
      images = pagesAssets.reviews.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/shipping')) {
      images = pagesAssets.shipping.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    } else if (path.includes('/shop/seating')) {
      images = pagesAssets.seatingShop.map(image => ({
        loc: {
          href: `${image.includes('http') ? '' : 'https:'}${image}`,
        },
      }));
    }
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
      images,
    };
  },
};
