import Image from 'next/image';
import React, { FC } from 'react';
import { ChevronDown } from '@/components/Common/Icons/ChevronDown';
import { useMediaQuery } from '@mui/material';
import {
  LeftContainer,
  ActiveLocale,
  ActiveLocaleIconWrapper,
  ActiveLocaleText,
  FeatureDivider,
  FeatureText,
  LocaleDropdown,
  LocaleDropdownItemText,
  LocaleDropdownItemWrapper,
  LocaleItemIconWrapper,
  LocaleSwitcherContainer,
  TopbarContainer,
  ArrowIconWrapper,
  LocaleDropdownDividerB,
  LocaleDropdownDividerA,
} from './styles';
import { HideOnScroll } from '../HideOnScroll';

interface TopbarProps {
  locales: {
    country: string;
    language: string;
  }[];
  isLocaleDropdownOpen: boolean;
  setIsLocaleDropdownOpen: (isLocaleDropdownOpen: boolean) => void;
  activeLocale: {
    country: string;
    language: string;
  };
  handleLocaleDropdownClick: (country: string, language: string) => void;
}

const Topbar: FC<TopbarProps> = ({
  activeLocale,
  handleLocaleDropdownClick,
  isLocaleDropdownOpen,
  locales,
  setIsLocaleDropdownOpen,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <HideOnScroll>
      <TopbarContainer>
        <LeftContainer>
          {!isMobile && (
            <>
              <FeatureText>Designed in North America</FeatureText>
              <FeatureDivider />
            </>
          )}
          <FeatureText>Fast & Free Shipping</FeatureText>
          <FeatureDivider />
          <FeatureText>30-day risk-free trial</FeatureText>
        </LeftContainer>
        <LocaleSwitcherContainer>
          <ActiveLocale
            onClick={() => setIsLocaleDropdownOpen(!isLocaleDropdownOpen)}
          >
            <ActiveLocaleText>
              {activeLocale.language.toUpperCase()}
            </ActiveLocaleText>
            <ActiveLocaleIconWrapper>
              <Image
                src={`/images/${activeLocale.country}-flag.svg`}
                alt="Locale icon"
                width={16}
                height={16}
              />
            </ActiveLocaleIconWrapper>
          </ActiveLocale>
          <ArrowIconWrapper
            onClick={() => setIsLocaleDropdownOpen(!isLocaleDropdownOpen)}
          >
            <ChevronDown />
          </ArrowIconWrapper>
          {isLocaleDropdownOpen && (
            <LocaleDropdown>
              {locales
                .filter(
                  locale =>
                    locale.country !== activeLocale.country ||
                    locale.language !== activeLocale.language,
                )
                .map((locale, index) => (
                  <>
                    <LocaleDropdownItemWrapper
                      key={`${locale.country}-${locale.language}`}
                      onClick={() =>
                        handleLocaleDropdownClick(
                          locale.country,
                          locale.language,
                        )
                      }
                    >
                      <LocaleDropdownItemText>
                        <span>
                          {locale.country === 'canada'
                            ? 'Canada'
                            : 'United States'}
                        </span>
                        <LocaleDropdownDividerA />
                        <span>{locale.language.toUpperCase()}</span>
                      </LocaleDropdownItemText>
                      <LocaleItemIconWrapper>
                        <Image
                          src={`/images/${locale.country}-flag.svg`}
                          alt="Locale icon"
                          width={16}
                          height={16}
                        />
                      </LocaleItemIconWrapper>
                    </LocaleDropdownItemWrapper>
                    {index !== locales.length - 2 && <LocaleDropdownDividerB />}
                  </>
                ))}
            </LocaleDropdown>
          )}
        </LocaleSwitcherContainer>
      </TopbarContainer>
    </HideOnScroll>
  );
};

export default Topbar;
