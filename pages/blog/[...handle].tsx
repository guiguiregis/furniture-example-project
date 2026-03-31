import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Colors from '@/constants/colors';
import BlogSection from '@/components/BlogSection';
import { getLayoutData } from '../../helpers/contentful';
import {
  getBlogData,
  getPostsByType,
} from '../../helpers/contentful/getPostData';
import { BlogPost } from '../../helpers/contentful';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface Props {
  blogPostData: any;
  suggestedPosts: BlogPost[];
}

const Container = styled.div`
  padding: 80px 240px 80px 240px;

  @media (max-width: 1440px) {
    padding: 80px 120px;
  }
  @media (max-width: 1024px) {
    padding: 80px 24px;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const BlogImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const BlogImage = styled(Image)`
  border-radius: 20px;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

const BlogHeader = styled.div`
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const BlogHeaderBreadcrumbs = styled.div`
  color: ${Colors.COZEY_PURPLE};

  & a {
    color: ${Colors.COZEY_PURPLE};
  }

  & span {
    color: ${Colors.COZEY_ULTRAMARINE_BLUE};
    font-family: 'Larsseit Bold';
  }
`;

const BlogTitle = styled.h1`
  font-family: 'QuincyCFBold';
  color: ${Colors.MEDIUM_BLUE};
  font-size: 60px;
  line-height: 64px;
  text-align: left;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    margin-top: 0;
  }
`;

const BlogContent = styled.div`
  margin-top: 40px;

  @media (min-width: 1440px) {
    padding: 0 120px;
  }

  @media (max-width: 1440px) {
    padding: 0 120px;
  }

  @media (max-width: 1024px) {
    padding: 0 80px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & h1 {
    font-size: 40px;
    margin-top: 30px;
  }

  & h1:first-child {
    font-size: 60px;
  }

  h2 {
    font-family: 'Larsseit Bold';
    font-size: 32px;
    line-height: 32px;
    margin-top: 48px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 26px;
    }
  }

  & h6 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  & a {
    color: ${Colors.COZEY_BLUE};
    font-weight: bold;
  }

  & p {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

const BlogPost = ({ blogPostData, suggestedPosts }: Props) => {
  const { width } = useWindowDimensions();

  const filteredPosts = suggestedPosts
    .filter(post => post.handle !== blogPostData.handle)
    .slice(0, width <= 768 ? 4 : 3);

  return (
    <>
      <Container>
        <Head>
          <title>{blogPostData.metaTitle}</title>
        </Head>
        <BlogHeader>
          <BlogHeaderBreadcrumbs>
            <Link href="/#simones-corner">Blog</Link> /{' '}
            <span>{blogPostData.title}</span>
          </BlogHeaderBreadcrumbs>
          <BlogTitle>{blogPostData.title}</BlogTitle>
        </BlogHeader>
        {blogPostData.image && (
          <BlogImageWrapper>
            <BlogImage
              objectFit="cover"
              layout="fill"
              src={blogPostData.image}
              alt="blog image"
            />
          </BlogImageWrapper>
        )}
        <BlogContent
          dangerouslySetInnerHTML={{
            __html: blogPostData.content,
          }}
        />
      </Container>
      <BlogSection title="Suggested Posts" posts={filteredPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  try {
    const handle = params?.handle;
    const layoutData = await getLayoutData();
    const blogPostData = await getBlogData(handle);
    const { posts: suggestedPosts } = await getPostsByType('blog_post');
    return {
      props: {
        layoutData,
        blogPostData,
        suggestedPosts,
      },
    };
  } catch (error) {
    return {
      props: {
        layoutData: {},
        locale,
      },
      redirect: {
        destination: '/',
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default BlogPost;
