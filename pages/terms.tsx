import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import Colors from '@/constants/colors';
import { getLayoutData } from '../helpers/contentful';
import { getBlogData } from '../helpers/contentful/getPostData';

interface Props {
  tosPageData: any;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 240px 80px 240px;
  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  @media (max-width: 1024px) {
    height: 300px;
  }
`;
const BlogContent = styled.div`
  margin-top: 40px;

  & h1 {
    font-size: 40px;
    margin-top: 30px;
  }

  & h1:first-child {
    font-size: 60px;
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
    margin-bottom: 16px;
  }
`;

const TosPage = ({ tosPageData }: Props) => {
  return (
    <Container>
      <Head>
        <title>{tosPageData.metaTitle}</title>
        <link
          rel="alternate"
          href="https://www.cozey.com/terms"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.cozey.com/terms"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.cozey.com/terms"
          hrefLang="en-us"
        />
      </Head>
      {/* <PageHeader title={tosPageData.title} /> */}
      {tosPageData.image && (
        <BlogImage>
          <Image
            // placeholder="blur"
            // blurDataURL={tosPageData.blurImageUrl || ''}
            objectFit="cover"
            layout="fill"
            src={tosPageData.image}
            alt="terms image"
          />
        </BlogImage>
      )}

      <BlogContent
        dangerouslySetInnerHTML={{
          __html: tosPageData.content,
        }}
      />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const layoutData = await getLayoutData();
    const tosPageData = await getBlogData('terms');
    return {
      props: {
        layoutData,
        tosPageData,
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

export default TosPage;
