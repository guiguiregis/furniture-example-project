import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Button } from './styles';

interface PropsContainer {
  margin?: string;
  height?: string;
}

export interface HomepageAboutCozey {
  image: string;
  text: string;
  text2: string;
  mobileImage: string;
  mobileText?: string;
  link?: string;
  linkTitle?: string;
  subtitle?: string;
}

const HeroContainer = styled.div<PropsContainer>`
  margin: ${props => (props.margin ? props.margin : '70px 0')};
  margin-bottom: 0px;
  display: flex;
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
  height: ${props => (props.height ? '100vh' : '')};
  max-height: ${props => (props.height ? '' : '')};
  @media (max-width: 1024px) {
    height: 580px;
  }
`;

interface MobileHeroImageProps {
  imgUrl?: string;
  height?: string;
  top?: string;
}

const MobileHeroImage = styled.div<MobileHeroImageProps>`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  position: relative;
  @media (max-width: 1024px) {
    height: 580px;
  }
`;

const HeroInfoContainer = styled.div<MobileHeroImageProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 80px;
  margin-left: 80px;
  width: 80%;
  @media (max-width: 1024px) {
    bottom: 0;
    margin: 0;
    width: 100%;
    padding: 0 32px 24px 32px;
    left: 0;
  }
`;

const HeroTitle = styled.h1<MobileHeroImageProps>`
  color: ${Colors.WHITE};
  font-family: ${props => (props.top ? 'Quincy Bold' : 'QuincyCFRegular')};
  font-size: 60px;
  margin: unset;
  position: relative;
  text-shadow: 0px 4px 10px rgba(25, 20, 43, 0.2);
  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeroMobileTitle = styled.h1<MobileHeroImageProps>`
  display: none;
  @media (max-width: 1024px) {
    font-family: ${props => (props.top ? 'Quincy Bold' : 'QuincyCFRegular')};
    display: block;
    position: absolute;
    font-size: 28px;
    margin: 0;
    padding: 0 32px 24px 32px;
    top: ${props => (props.top ? '95px' : 'unset')};
  }
`;

const SVGContainer = styled.div`
  height: 20px;
  width: 24px;
  position: relative;
  @media (max-width: 1024px) {
    height: 15px;
    width: 18px;
  }
`;

export const HeroImageComponent = (props: {
  heroData: HomepageAboutCozey;
  margin?: string;
  btnColor?: string;
  height?: string;
  top?: string;
}) => {
  const {
    heroData,
    margin,
    btnColor = Colors.COZEY_CLOUD_WHITE,
    height,
    top,
  } = props;
  const { width } = useWindowDimensions();

  const hasMobileImage = !!heroData?.mobileImage;

  const heroImage =
    width <= 1024 && hasMobileImage
      ? heroData.mobileImage || ''
      : heroData.image;

  return (
    <div>
      <HeroContainer height={height} margin={margin}>
        <MobileHeroImage height={height} imgUrl={heroData.image}>
          <Image
            quality={100}
            alt="hero image"
            fill
            src={heroImage}
            style={{ objectFit: 'cover' }}
            // placeholder="blur"
            // blurDataURL={heroImage}
          />
        </MobileHeroImage>
        <HeroMobileTitle top={top}>{heroData.mobileText}</HeroMobileTitle>
        <HeroInfoContainer>
          <HeroTitle top={top}>
            {heroData.text}
            <div>{heroData.text2}</div>
          </HeroTitle>
          <Link href={heroData.link ?? '/'} passHref>
            <Button btnColor={btnColor} gap="18px">
              <p>{heroData.linkTitle}</p>
              <SVGContainer>
                <Image
                  src="/images/icons/arrow-down.svg"
                  fill
                  alt="arrow down icon"
                />
              </SVGContainer>
            </Button>
          </Link>
        </HeroInfoContainer>
      </HeroContainer>
    </div>
  );
};
