import { gql } from '@apollo/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from './contentfulClient';
import { BlogPost } from './contentful.types';

export const getPostsByType = async (type: string | string[] | undefined) => {
  const { data } = await contentfulClient.query({
    query: gql`
      {
        postCollection(where: { type: "${type}" }, limit: 5) {
          items {
            title
            buttonLink
            thumbnailImage {
              url(transform: {format: WEBP})
            }
            handle
          }
        }
      }
    `,
  });
  return {
    posts: data.postCollection.items.map(
      ({ title, handle, thumbnailImage, buttonLink }: any) => ({
        title,
        handle,
        thumbnailImage: thumbnailImage.url,
        buttonLink,
      }),
    ),
  };
};

export const getBlogData = async (
  handle: string | string[] | undefined,
): Promise<BlogPost> => {
  const { data } = await contentfulClient.query({
    query: gql`
      {
        postCollection(where: { handle: "${handle}" }, limit: 1) {
          items {
            metaTitle
            title
            excerpt
            buttonLink
            tags
            content {
              json
              links {
                assets {
                  block {
                    url
                    height
                    width
                    title
                    sys {
                      id
                    }
                  }
                }
              }
            }
            date
            image {
              url(transform: {format: WEBP})
            },
            thumbnailImage {
              url(transform: {format: WEBP})
            }
            handle
          }
        }
      }
    `,
  });
  const blogPost = data.postCollection.items[0];
  return {
    metaTitle: blogPost.metaTitle,
    image: blogPost.image && blogPost.image.url ? blogPost.image.url : null,
    title: blogPost.title,
    date: blogPost.date,
    tags: blogPost.tags,
    link: blogPost.buttonLink,
    excerpt: blogPost.excerpt,
    content: documentToHtmlString(blogPost.content.json),
    handle: blogPost.handle,
  };
};
