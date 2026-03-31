import { gql } from '@apollo/client';
import { HomePageData } from './contentful.types';
import { contentfulClient } from './contentfulClient';

export const getHomePageData = async (): Promise<HomePageData> => {
  const { data } = await contentfulClient.query({
    query: gql`
      {
        homepage(id: "${process.env.CONTENTFUL_HOMEPAGE_ID}") {
          metaTitle
          metaDescription
          heroTitle
          heroText
          heroThumbnail {
            url(transform: { format: WEBP })
          }
          heroThumbnailMobile {
            url(transform: { format: WEBP })
          }
          heroVideo {
            url
          }
          heroVideoMobile {
            url
          }
          reviewsSectionTitle
          reviewsSectionSubtitle
          pressReviewsCollection(limit: 10) {
            items {
              reviewName
              reviewText
              reviewLink
              reviewImage {
                url(transform: { format: WEBP })
              }
              reviewLogo {
                url(transform: { format: WEBP })
              }
            }
          }
          ourCollectionsTitle
          ourCollectionsItemsCollection(limit: 10) {
            items{
              title
              description
              image {
                url(transform: { format: WEBP })
              }
              url
            }
          }
          blogSectionTitle
          featuredBlogPostsCollection(limit: 6) {
            items{
              title
              buttonLink
              thumbnailImage {
                url(transform: { format: WEBP })
              }
              handle
            }
          }
        }
      }
    `,
  });

  return {
    metaTitle: data.homepage.metaTitle,
    metaDescription: data.homepage.metaDescription,
    reviewsSectionTitle: data.homepage.reviewsSectionTitle,
    reviewsSectionSubtitle: data.homepage.reviewsSectionSubtitle,
    hero: {
      text: data.homepage.heroTitle,
      text2: data.homepage.heroText,
      image: data.homepage.heroThumbnail.url,
      mobileImage: data.homepage.heroThumbnailMobile.url,
      video: data.homepage.heroVideo.url,
      mobileVideo: data.homepage.heroVideoMobile.url,
    },
    pressReviews: data.homepage.pressReviewsCollection.items.map(
      ({
        reviewName,
        reviewText,
        reviewLink,
        reviewImage,
        reviewLogo,
      }: any) => ({
        name: reviewName,
        text: reviewText,
        link: reviewLink,
        image: reviewImage.url,
        logo: reviewLogo.url,
      }),
    ),
    ourCollectionsTitle: data.homepage.ourCollectionsTitle,
    ourCollectionsItems: data.homepage.ourCollectionsItemsCollection.items.map(
      ({ title, description, image, url }: any) => ({
        title,
        description,
        image: image.url,
        url,
      }),
    ),
    blogSectionTitle: data.homepage.blogSectionTitle,
    featuredBlogPosts: data.homepage.featuredBlogPostsCollection.items.map(
      ({ title, handle, thumbnailImage, buttonLink }: any) => ({
        title,
        handle,
        thumbnailImage: thumbnailImage.url,
        buttonLink,
      }),
    ),
  };
};
