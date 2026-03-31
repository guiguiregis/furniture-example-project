/* eslint-disable no-nested-ternary */
/* eslint-disable no-ternary */
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '@/constants/colors';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ButtonHeroVideo } from './styles';
import useVideoPlayer from './useVideoPlayer';

export interface Hero {
  title: string[];
  buttonLink: string;
  buttonText: string;
  thumbnail?: string;
  mobileThumbnail?: string;
}

interface VideoProps {
  isLoaded?: boolean;
  layout?: 'home' | undefined;
  videoType?: undefined | 'normal';
  isMobile?: boolean;
}

const ActionButton = styled.button<VideoProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #2b2c6e;
  background: #c4c4c4;
  opacity: 0.5;
  border: none;
  transition: all 0.2s ease-in-out;
  position: absolute;
  /* right: 50vw;
  top: 40vh; */
  margin-top: ${({ videoType }: VideoProps) => (videoType ? '-50px' : 'none')};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 5;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    height: 70px;
    width: 70px;
    right: ${({ videoType }: VideoProps) => (videoType ? '51.5%' : '45vw')};
    top: ${({ videoType }: VideoProps) => (videoType ? '54%' : '45vh')};
    margin-right: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    margin-top: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    display: block;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    right: ${({ videoType }: VideoProps) => (videoType ? '53%' : '44vw')};

    top: ${({ layout, videoType }: VideoProps) =>
      layout === 'home' && !videoType
        ? '260px'
        : layout === 'home' && videoType
        ? '0vh'
        : '55%'};

    margin-right: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    margin-top: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    display: block;
    opacity: 0.7;
  }

  @media (max-width: 425px) {
    height: 60px;
    width: 60px;
    right: ${({ videoType }: VideoProps) => (videoType ? '55%' : '44vw')};

    top: ${({ layout, videoType }: VideoProps) =>
      layout === 'home' && !videoType
        ? '260px'
        : layout === 'home' && videoType
        ? '0vh'
        : '57%'};

    margin-right: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    margin-top: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    display: block;
    opacity: 0.7;
  }

  @media (max-width: 375px) {
    height: 60px;
    width: 60px;
    right: ${({ videoType }: VideoProps) => (videoType ? '55%' : '44vw')};

    top: ${({ layout, videoType }: VideoProps) =>
      layout === 'home' && !videoType
        ? '260px'
        : layout === 'home' && videoType
        ? '0vh'
        : '57%'};

    margin-right: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    margin-top: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    display: block;
    opacity: 0.7;
  }

  @media (max-width: 320px) {
    height: 60px;
    width: 60px;
    right: ${({ videoType }: VideoProps) => (videoType ? '57%' : '44vw')};

    top: ${({ layout, videoType }: VideoProps) =>
      layout === 'home' && !videoType
        ? '260px'
        : layout === 'home' && videoType
        ? '0vh'
        : '62%'};

    margin-right: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    margin-top: ${({ videoType }: VideoProps) =>
      videoType ? '-50px' : 'none'};
    display: block;
    opacity: 0.7;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &:hover ${ActionButton} {
    display: flex;
  }
`;

const ElegantImage = styled.div<VideoProps>`
  display: ${({ isLoaded }: VideoProps) => (isLoaded ? 'none' : 'block')};
  width: 100%;
  height: calc(100vh - 40px);
  object-fit: cover;

  @media (max-width: 700px) {
    height: ${({ layout }: VideoProps) =>
      layout === 'home' ? '580px' : '400px'};
  }

  /* @media (max-width: 500px) {
    height: 400px;
  } */
`;

const ElegantVideo = styled.video<VideoProps>`
  display: ${({ isLoaded }: VideoProps) => (isLoaded ? 'block' : 'none')};
  width: 100%;
  /* height: calc(100vh - 40px); */
  height: ${({ videoType }: VideoProps) =>
    videoType ? '100%' : 'calc(100vh - 40px)'};
  object-fit: cover;
  border-radius: ${({ videoType }: VideoProps) => (videoType ? '20px' : '0px')};

  @media (max-width: 700px) {
    height: 580px;
  }

  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;

const HeroInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 40px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    top: 75px;
    padding: 0 32px 24px 32px;
    margin: 0;
  }
`;

const HeroTitle = styled.h1`
  display: flex;
  flex-direction: column;
  color: ${colors.WHITE};
  font-family: 'QuincyCFRegular';
  font-size: 72px;
  line-height: 76px;
  text-shadow: 0px 2px 4px #19142b26;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 16px;
  }
`;

const SubTitle = styled.p`
  color: ${colors.WHITE};
  font-family: 'CamptonBook';
  font-style: italic;
  font-size: 42px;
  line-height: 49px;
  text-shadow: 0px 4px 10px rgba(25, 20, 43, 0.2);
  text-align: center;

  @media (max-width: 600px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInButton = styled.div`
  display: flex;
  position: absolute;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  top: 80vh;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 23px 25px;
  gap: 16px;
  width: 82px;
  height: 80px;
  background-color: #f5f6f8;
  border-radius: 50px;

  @media (max-width: 768px) {
    top: 80vh;
    gap: 12px;
    width: 56px;
    height: 56px;
  }
`;

const SVGIcon = styled(Image)`
  object-fit: contain;
  height: 24px;
  width: 24px;
`;

const HeroVideoComponentWithControls = (props: {
  heroData?: Hero;
  title: string;
  secondTitle?: string;
  subtitle?: string;
  btnText?: string;
  btnColor: string;
  heroVideo?: string;
  heroVideoMobile?: string;
  videoThumbnail?: string;
  autoplay?: boolean;
  loopCount?: number;
  muted?: boolean;
  layout?: 'home' | undefined;
  startThumbnail?: string;
  imageOnly?: boolean;
  videoType?: undefined | 'normal';
}) => {
  const router = useRouter();
  const {
    heroData,
    title,
    btnText,
    btnColor,
    subtitle,
    secondTitle,
    heroVideo,
    heroVideoMobile,
    videoThumbnail,
    autoplay,
    loopCount = 0,
    muted = true,
    layout,
    videoType,
    startThumbnail,
    imageOnly,
  } = props;

  const [isVideoLoaded, setIsVideoLoaded] = React.useState<boolean>(true);
  const videoElement = React.useRef(null);
  const [showBtn, setShowBtn] = React.useState<boolean>(false);
  const [playCount, setPlayCount] = React.useState<number>(1);
  const isMobile = useMediaQuery('(max-width: 850px)');
  const isMobile2 = useMediaQuery('(max-width: 768px)');
  const { playing, togglePlay, handleOnTimeUpdate, start, progress, pause } =
    useVideoPlayer(videoElement);

  useEffect(() => {
    if (autoplay && isVideoLoaded) {
      start();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVideoLoaded, autoplay]);

  useEffect(() => {
    setTimeout(() => {
      setShowBtn(true);
    }, 5000);
  }, []);

  const handleLoop = () => {
    if (autoplay) {
      setPlayCount(prev => prev + 1);
      return start();
    }

    if (playCount < loopCount) {
      setPlayCount(prev => prev + 1);
      return start();
    }

    setPlayCount(prev => prev + 1);
    return pause();
  };

  const scrollToNewsLetter = () => {
    const newsLetterScroll = document.querySelector('#topNewsLetter');
    newsLetterScroll?.scrollIntoView({ behavior: 'smooth' });
  };

  const shouldShowControls = !autoplay || playCount > loopCount;
  const thumbnail =
    // eslint-disable-next-line no-nested-ternary
    isMobile && heroData?.mobileThumbnail
      ? heroData?.mobileThumbnail
      : heroData?.thumbnail ?? '';
  return (
    <HeroContainer>
      {isVideoLoaded ? (
        <ElegantImage
          layout={layout}
          isLoaded={isVideoLoaded && progress !== 100}
        >
          <Image
            // placeholder="blur"
            // blurDataURL={videoThumbnail || thumbnail}
            fill
            quality={100}
            priority
            src={videoThumbnail || thumbnail}
            style={{ objectFit: 'cover' }}
            alt="thumbnail"
          />
        </ElegantImage>
      ) : (
        <ElegantImage
          layout={layout}
          isLoaded={isVideoLoaded && progress !== 100}
        >
          <Image
            // placeholder="blur"
            // blurDataURL={startThumbnail || videoThumbnail || thumbnail}
            fill
            quality={100}
            priority
            src={startThumbnail || videoThumbnail || thumbnail}
            style={{ objectFit: 'cover' }}
            alt="thumbnail"
          />
        </ElegantImage>
      )}
      {/* {shouldShowControls && !imageOnly && !isMobile2 && (
        <ActionButton
          videoType={videoType}
          layout={layout}
          onClickCapture={togglePlay}
        >
          {!playing ? 'PLAY' : 'PAUSE'}
        </ActionButton>
      )} */}

      {!isMobile2 ? (
        <ElegantVideo
          layout={layout}
          videoType={videoType}
          ref={videoElement}
          isLoaded={isVideoLoaded && progress !== 100}
          onLoadedDataCapture={() => setIsVideoLoaded(true)}
          key={heroVideo || heroData?.thumbnail}
          preload="metadata"
          webkit-playsinline
          playsInline
          poster={videoThumbnail || thumbnail}
          onTimeUpdate={handleOnTimeUpdate}
          autoPlay={videoType ? true : autoplay || false}
          onEndedCapture={handleLoop}
          src={`${heroVideo}` || `${heroData?.thumbnail}#t=1.55`}
          muted={muted}
          isMobile={isMobile2}
          loop={videoType && true}
        />
      ) : (
        <ElegantVideo
          layout={layout}
          videoType={videoType}
          ref={videoElement}
          isLoaded={isVideoLoaded && progress !== 100}
          onLoadedDataCapture={() => setIsVideoLoaded(true)}
          key={heroVideoMobile || heroData?.mobileThumbnail}
          preload="metadata"
          webkit-playsinline
          playsInline
          poster={videoThumbnail || thumbnail}
          onTimeUpdate={handleOnTimeUpdate}
          autoPlay={videoType ? true : autoplay}
          onEndedCapture={handleLoop}
          src={`${heroVideoMobile}` || `${heroData?.mobileThumbnail}`}
          muted={muted}
          isMobile={isMobile2}
          loop={videoType && true}
        />
      )}
      <HeroInfoContainer>
        <HeroTitle>
          <span>{title}</span>
          <span>{secondTitle}</span>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
        </HeroTitle>

        {btnText?.length && (
          <ButtonHeroVideo
            style={{
              backgroundColor: btnColor,
              color:
                btnColor === colors.COZEY_BLUE ||
                btnColor === colors.COZEY_LIGHT_BLUE
                  ? colors.COZEY_CLOUD_WHITE
                  : colors.COZEY_BLUE,
            }}
            onClick={() => heroData && router.push(heroData?.buttonLink)}
          >
            {btnText}
            {/* <IconComponent
              fill={
                btnColor === colors.COZEY_BLUE ||
                btnColor === colors.COZEY_LIGHT_BLUE
                  ? colors.COZEY_CLOUD_WHITE
                  : colors.COZEY_BLUE
              }
              name="arrowRight"
              fontSize={32}
            /> */}
          </ButtonHeroVideo>
        )}
      </HeroInfoContainer>
      {showBtn && (
        <FadeInButton onClick={() => scrollToNewsLetter()}>
          <SVGIcon
            src="/images/icons/arrow-down.svg"
            width={24}
            height={24}
            alt=""
          />
        </FadeInButton>
      )}
    </HeroContainer>
  );
};

export { HeroVideoComponentWithControls };
