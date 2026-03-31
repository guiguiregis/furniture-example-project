import React, { FC, useEffect, useState } from 'react';
import { PressReview } from '@/helpers/contentful/contentful.types';
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from '../Section/styles';
import { ReviewsContainer } from './styles';
import ReviewItem from './ReviewItem';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const PressReviewsCarousel: FC<{
  title: string;
  subtitle: string;
  reviews: PressReview[];
}> = ({ title, subtitle, reviews: initialReviews }) => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const [reviews, setReviews] = useState(initialReviews);
  const ANIMATION_DURATION = 6000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const reviewsCopy = [...reviews];
      const firstItem = reviewsCopy.shift();
      reviewsCopy.push(firstItem as PressReview);
      setReviews(reviewsCopy);
    }, ANIMATION_DURATION);

    return () => clearInterval(intervalId);
  }, [reviews]);

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </SectionHeader>
      <ReviewsContainer $isMobile={isMobile}>
        {reviews.map((review, index) => (
          <ReviewItem
            key={review.name}
            review={review}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </ReviewsContainer>
    </SectionContainer>
  );
};

export default PressReviewsCarousel;
