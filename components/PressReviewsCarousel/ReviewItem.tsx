import React, { FC } from 'react';
import { PressReview } from '@/helpers/contentful/contentful.types';
import {
  ReviewItemContainer,
  ReviewItemImage,
  ReviewItemLogo,
  ReviewItemText,
} from './styles';

const ReviewItem: FC<{
  review: PressReview;
  index: number;
  isMobile: boolean;
}> = ({ review, index, isMobile }) => {
  const ITEM_DIMENSIONS = {
    active: {
      desktop: {
        width: 740,
        height: 460,
      },
      mobile: {
        width: 364,
        height: 272,
      },
    },
    inactive: {
      desktop: {
        width: 482,
        height: 300,
      },
      mobile: {
        width: 220,
        height: 165,
      },
    },
  };

  const isFirst = index === 0;
  const isActive = index === 1;
  const isLast = index === 2;

  const mobileOrDesktopString = isMobile ? 'mobile' : 'desktop';

  const containerWidth = isActive
    ? ITEM_DIMENSIONS.active[mobileOrDesktopString].width
    : ITEM_DIMENSIONS.inactive[mobileOrDesktopString].width;

  return (
    <ReviewItemContainer
      $isActive={isActive}
      $isFirst={isFirst}
      $isLast={isLast}
      $width={containerWidth}
    >
      <ReviewItemImage
        src={review.image}
        alt={review.name}
        width={
          isActive
            ? ITEM_DIMENSIONS.active[mobileOrDesktopString].width
            : ITEM_DIMENSIONS.inactive[mobileOrDesktopString].width
        }
        height={
          isActive
            ? ITEM_DIMENSIONS.active[mobileOrDesktopString].height
            : ITEM_DIMENSIONS.inactive[mobileOrDesktopString].height
        }
      />

      <ReviewItemLogo
        src={review.logo}
        alt={`${review.name} logo`}
        width={220}
        height={40}
      />
      <ReviewItemText>{review.text}</ReviewItemText>
    </ReviewItemContainer>
  );
};

export default ReviewItem;
