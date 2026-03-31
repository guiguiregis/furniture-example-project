import { CylindoCustomizer } from '@/components/Common/CylindoCustomizer';
import Colors from '@/constants/colors';
import { COLLECTIONS } from '@/constants/cylindoCustomizerData';
import { Color } from '@/helpers/contentful/contentful.types';
import { getAllColors } from '@/helpers/contentful/getAllColors';
import { FC } from 'react';
import Head from 'next/head';
import { HomePageData } from '@/helpers/contentful/contentful.types';
import { getHomePageData } from '@/helpers/contentful/getHomePageData';
import OurCollections from '@/components/OurCollections';
import PressReviewsCarousel from '@/components/PressReviewsCarousel';
import GotQuestionsSection from '@/components/GotQuestionsSection';
import BlogSection from '@/components/BlogSection';
import { HeroVideoComponentWithControls } from '@/components/HeroVideoComponent';
import TopNewsLetter from '@/components/TopNewsLetter';
import { LayoutData } from '@/helpers/contentful';
import { styled } from 'styled-components';
import { getLayoutData } from '../helpers/contentful';
//import useWindowDimensions from '@/hooks/useWindowDimensions';

interface HomePageProps {
  homePageData: HomePageData;
  colorsData: Color[];
  layoutData: LayoutData;
}

const Space = styled.div`
  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

const Home: FC<HomePageProps> = ({ colorsData, homePageData, layoutData }) => {
  const {
    metaTitle,
    metaDescription,
    reviewsSectionTitle,
    reviewsSectionSubtitle,
    pressReviews,
    ourCollectionsItems,
    ourCollectionsTitle,
    hero,
    blogSectionTitle,
    featuredBlogPosts,
  } = homePageData;
  //const { width } = useWindowDimensions();

  const heroData = {
    title: [hero.text],
    buttonLink: '',
    buttonText: '',
    thumbnail: hero.image,
    mobileThumbnail: hero.mobileImage,
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div>
        <HeroVideoComponentWithControls
          heroData={heroData}
          title={hero.text}
          subtitle={hero.text2}
          heroVideo={hero.video}
          heroVideoMobile={hero.mobileVideo}
          btnColor="#FFFFFF"
          autoplay
        />
      </div>
      <TopNewsLetter data={layoutData.footer} />
      <div style={{ background: Colors.COZEY_CLOUD_WHITE }}>
        <CylindoCustomizer
          layout="home"
          colorsData={colorsData}
          headerText="Yours to customize"
          collections={COLLECTIONS}
        />
      </div>
      <OurCollections
        collections={ourCollectionsItems}
        title={ourCollectionsTitle}
      />
      <PressReviewsCarousel
        title={reviewsSectionTitle}
        subtitle={reviewsSectionSubtitle}
        reviews={pressReviews}
      />
      <GotQuestionsSection />
      <div
        id="simones-corner"
        style={{ marginTop: '60px', overflow: 'hidden' }}
      >
        <BlogSection title={blogSectionTitle} posts={featuredBlogPosts} />
        <Space />
      </div>
      {/* <ContactSection /> */}
    </div>
  );
};

export async function getStaticProps() {
  const colorsData = await getAllColors('en');
  const homePageData = await getHomePageData();
  const layoutData = await getLayoutData();
  //const helpPageData: helpFaqPageData = await getHelpFaqPageData(locale);

  return {
    props: {
      homePageData,
      colorsData,
      layoutData,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}
export default Home;
