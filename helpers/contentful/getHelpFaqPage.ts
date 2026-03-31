import { gql } from '@apollo/client';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { CozeyInfo, helpFaqPageData } from './contentful.types';
import { contentfulClient } from './contentfulClient';

export const getHelpFaqPageData = async (
  locale: string | undefined,
): Promise<helpFaqPageData> => {
  const { data } = await contentfulClient.query({
    query: gql`
      {
        helpFaqPage(id: "1gazaDcOQZrcyq96aFBMFB", locale: "${locale}") {
          metaTitle
          mainTitle
          mainSubtitle
          shippingTitle
          nav
          shippingTilesCollection(limit: 100) {
            items {
              title
              description1
              linkText
              linkUrl
              linkText2
              linkUrl2
            }
          }
          returnsTitle
          returnsTilesCollection(limit: 100) {
            items {
              title
              description1
              linkText
              linkUrl
              linkText2
              linkUrl2
            }
          }
          warrantyTitle
          warrantyTilesCollection(limit: 100) {
            items {
              title
              description1
              linkText
              linkUrl
              linkText2
              linkUrl2
            }
          }
          productTitle
          productTilesCollection(limit: 100) {
            items {
              title
              description1
              linkText
              linkUrl
              linkText2
              linkUrl2
              linkText3
              linkUrl3
              linkText4
              linkUrl4
            }
          }
          assemblyTitle
          assemblyTilesCollection(limit: 100) {
            items {
              title
              description1
              linkText
              linkUrl
              linkText2
              linkUrl2
            }
          }
          financingTitle
          financingTilesCollection(limit: 100) {
            items {
              title
              description1
              linkText
              linkUrl
              linkText2
              linkUrl2
            }
          }
          giftCardTitle
          giftCardTilesCollection(limit: 12) {
            items {
              title
              description {
                json
              }
            }
          }
          contactTileCollection(limit: 1) {
            items {
              title
              image {
                url(transform: {format: WEBP})
              }
              description1
              description2
              linkText
              linkUrl
              linkText2
              linkUrl2
            }
          }
          
        }
      }
    `,
  });

  return {
    metaTitle: data.helpFaqPage.metaTitle,
    mainTitle: data.helpFaqPage.mainTitle,
    mainSubtitle: data.helpFaqPage.mainSubtitle,
    nav: data.helpFaqPage.nav,
    shippingTitle: data.helpFaqPage.shippingTitle,
    shippingTiles: data.helpFaqPage.shippingTilesCollection.items,
    returnsTitle: data.helpFaqPage.returnsTitle,
    returnsTiles: data.helpFaqPage.returnsTilesCollection.items,
    warrantyTitle: data.helpFaqPage.warrantyTitle,
    warrantyTiles: data.helpFaqPage.warrantyTilesCollection.items,
    productTitle: data.helpFaqPage.productTitle,
    productTiles: data.helpFaqPage.productTilesCollection.items,
    assemblyTitle: data.helpFaqPage.assemblyTitle,
    assemblyTiles: data.helpFaqPage.assemblyTilesCollection.items,
    financingTitle: data.helpFaqPage.financingTitle,
    financingTiles: data.helpFaqPage.financingTilesCollection.items,
    giftCardTitle: data.helpFaqPage.giftCardTitle,
    giftCardTiles: data.helpFaqPage.giftCardTilesCollection.items.map(
      (item: CozeyInfo) => ({
        title: item.title,
        description: documentToHtmlString(item.description.json),
      }),
    ),
    contactTile: data.helpFaqPage.contactTileCollection.items,
  };
};
