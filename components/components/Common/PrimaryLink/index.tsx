import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import colors from '@/constants/colors';
import { ArrowRight } from '../Icons/ArrowRight';
import { PrimaryLinkWrapper, Text } from './styles';

interface PrimaryLinkProps extends LinkProps {
  children: ReactNode;
  color: 'white' | 'ultramarine' | 'blue' | 'lightBlue';
  showArrow: boolean;
  showPlus?: boolean;
  fontSize?: string;
  external?: boolean;
  noLink?: boolean;
}

export const PrimaryLink = ({
  children,
  color,
  showArrow,
  showPlus,
  fontSize,
  external,
  noLink = false,
  ...rest
}: PrimaryLinkProps) => {
  const colorHandler = () => {
    if (color === 'white') return colors.COZEY_WHITE;
    if (color === 'blue') return colors.COZEY_BLUE;
    if (color === 'lightBlue') return colors.COZEY_LIGHT_BLUE;
    if (color === 'ultramarine') return colors.COZEY_ULTRAMARINE_BLUE;

    return colors.COZEY_ULTRAMARINE_BLUE;
  };
  if (noLink) {
    return (
      <PrimaryLinkWrapper
        rel={external ? 'noopener noreferrer' : ''}
        target={external ? '_blank' : ''}
        color={colorHandler()}
      >
        <Text color={colorHandler()} font={fontSize}>
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
  }

  return (
    <Link {...rest} passHref>
      <PrimaryLinkWrapper
        rel={external ? 'noopener noreferrer' : ''}
        target={external ? '_blank' : ''}
        color={colorHandler()}
      >
        <Text color={colorHandler()} font={fontSize}>
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
    </Link>
  );
};
