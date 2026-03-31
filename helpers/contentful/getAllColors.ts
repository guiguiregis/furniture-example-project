import { gql } from '@apollo/client';
import { Color } from './contentful.types';
import { contentfulClient } from './contentfulClientCa';

const getAllColorsQuery = (locale: string) => {
  return gql`
  {
    colorCollection(
      limit: 120
      locale: "${locale}"
    ) {
        items {
        hex
        image {
            url(transform: {format: WEBP})
        }
        desc
        title
        swatchData {
            url(transform: {format: WEBP})
            title
        }
        tagsCollection(limit: 2) {
            items {
            title
            icon {
                url(transform: {format: WEBP})
            }
            }
        }
        accessoryUpsellsCollection(limit: 5) {
            items {
            tag
            price
            link
            title
            name
            upsellTitle
            variantId
            buttonText
            image {
                url
            }
            }
        }
        sofaUpsellCollection(limit: 0) {
            items {
            tag
            link
            title
            name
            upsellTitle
            variantId
            buttonText
            image {
                url
            }
            }
        }
        value
        isLimited
        type
        cylindoCode
     }
    }
  }
`;
};

export const getAllColors = async (
  locale = 'en',
): Promise<{ colors: Color[] } | null> => {
  try {
    const colorsQuery = getAllColorsQuery(locale);

    const colorsResp = await contentfulClient.query({
      query: colorsQuery,
    });

    const colors = colorsResp.data.colorCollection.items.map((option: any) => {
      return {
        swatch: {
          url: option.swatchData.url,
          alt: option.swatchData.title,
        },
        desc: option.desc,
        tags: option.tagsCollection.items.map((tag: any) => {
          return {
            title: tag.title,
            icon: tag.icon.url,
          };
        }),
        accessoryUpsells: option.accessoryUpsellsCollection.items.map(
          (item: any) => {
            return {
              tag: item.tag,
              price: item.price,
              link: item.link,
              variantId: item.variantId,
              title: item.title,
              upsellText: item.upsellTitle,
              buttonText: item.buttonText,
              image: item.image.url,
            };
          },
        ),
        sofaUpsell: option.sofaUpsellCollection.items.map((item: any) => {
          return {
            tag: item.tag,
            link: item.link,
            variantId: item.variantId,
            title: item.title,
            upsellText: item.upsellTitle,
            buttonText: item.buttonText,
            image: item.image.url,
          };
        }),
        image: option.image.url,
        hex: option.hex,
        title: option.title,
        value: option.value,
        isLimited: option.isLimited,
        type: option.type || 'none',
        cylindoCode: option.cylindoCode,
      };
    });

    return colors;
  } catch (error) {
    console.log(error);
    return null;
  }
};
