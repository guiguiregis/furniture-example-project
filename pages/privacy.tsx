import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import Colors from '@/constants/colors';
import { getLayoutData } from '../helpers/contentful';
import { getBlogData } from '../helpers/contentful/getPostData';

interface Props {
  privacyPageData: any;
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

const PrivacyPage = ({ privacyPageData }: Props) => {
  return (
    <Container>
      <Head>
        <title>{privacyPageData.metaTitle}</title>
        <link
          rel="alternate"
          href="https://www.cozey.com/privacy"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.cozey.com/privacy"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.cozey.com/privacy"
          hrefLang="en-us"
        />
      </Head>
      {/* <PageHeader title={privacyPageData.title} /> */}
      {privacyPageData.image && (
        <BlogImage>
          <Image
            // placeholder="blur"
            // blurDataURL={privacyPageData.blurImageUrl || ''}
            objectFit="cover"
            layout="fill"
            src={privacyPageData.image}
            alt="blog image"
          />
        </BlogImage>
      )}

      <BlogContent
        dangerouslySetInnerHTML={{
          __html: privacyPageData.content,
        }}
      />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const layoutData = await getLayoutData();
    const privacyPageData = await getBlogData('privacy');
    return {
      props: {
        layoutData,
        privacyPageData,
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

export default PrivacyPage;
