import COLORS from '@/constants/colors';
import Image from 'next/image';
import styled from 'styled-components';

interface ReviewItemProps {
  $isActive: boolean;
  $isFirst?: boolean;
  $isLast?: boolean;
  $width: number;
}

export const ReviewsContainer = styled.div<{ $isMobile: boolean }>`
  position: relative;
  height: ${props => (props.$isMobile ? '400px' : '575px')};
  display: flex;
  align-items: center;
`;

export const ReviewItemContainer = styled.div<ReviewItemProps>`
  background-color: white;
  box-shadow: 0px 0px 50px 50px white;
  position: absolute;
  width: ${props => `${props.$width}px`};
  transition: all 1s ease-in-out;
  transform: translateX(-50%);
  ${props => (props.$isActive ? 'left: 50%;' : '')}
  ${props => (props.$isFirst ? 'left: 0%;' : '')}
  ${props => (props.$isLast ? 'left: 100%;' : '')}

  z-index: ${props => (props.$isActive ? '100' : '0')};
`;

export const ReviewItemImage = styled(Image)`
  display: block;
  border-radius: 20px;
  object-fit: cover;
`;

export const ReviewItemLogo = styled(Image)`
  display: block;
  width: 100%;
  height: 40px;
  margin: 16px 0;
  object-fit: contain;
`;

export const ReviewItemText = styled.p`
  color: ${COLORS.COZEY_ULTRAMARINE_BLUE};
  font-family: 'Larsseit Light Italic';
  font-size: 16px;
  line-height: 22px;
  margin: 0 auto;
  text-align: center;
  max-width: 300px;
`;
