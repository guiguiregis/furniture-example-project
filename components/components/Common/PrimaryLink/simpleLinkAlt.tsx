import Image from 'next/image';
import { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import colors from '@/constants/colors';
import { ArrowRight } from '../Icons/ArrowRight';
import { PrimaryLinkWrapper, Text } from './styles';

interface SimpleLinkAltProps extends LinkProps {
  children: ReactNode;
  color: 'white' | 'ultramarine' | 'blue' | 'lightBlue';
  showArrow: boolean;
  showPlus?: boolean;
  fontSize?: string;
  external?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  noLink?: boolean;
  style?: React.CSSProperties;
}

export const SimpleLinkAlt = ({
  children,
  color,
  showArrow,
  showPlus,
  fontSize,
  external,
  style,
}: SimpleLinkAltProps) => {
  const colorHandler = () => {
    if (color === 'white') return colors.COZEY_WHITE;
    if (color === 'blue') return colors.COZEY_BLUE;
    if (color === 'lightBlue') return colors.COZEY_LIGHT_BLUE;

    return colors.COZEY_ULTRAMARINE_BLUE;
  };
  //   if (noLink) {
  return (
    <PrimaryLinkWrapper
      style={style}
      rel={external ? 'noopener noreferrer' : ''}
      target={external ? '_blank' : ''}
      color={colorHandler()}
    >
      <Text
        color={colorHandler()}
        font={fontSize}
        style={{ fontFamily: 'CamptonSemiBold', fontWeight: 'unset' }}
      >
        {children}
      </Text>
      {showArrow && <ArrowRight color="inherit" />}
      {showPlus && (
        <Image
          src="/images/icons/AddBtn.svg"
          width={17.5}
          height={17.5}
          alt="icon"
        />
      )}
    </PrimaryLinkWrapper>
  );
  //   }
};
