/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { GlobalStyle } from '@/styles/global';
import React, { FC } from 'react';
import { FooterData, LayoutData } from '@/helpers/contentful';
import Topbar from './Topbar';
import MainNavigation from './MainNavigation';
import Footer from './Footer';

const LOCALES = [
  {
    country: 'us',
    language: 'en',
  },
  {
    country: 'canada',
    language: 'en',
  },
  {
    country: 'canada',
    language: 'fr',
  },
];

const Layout: FC<{ children: JSX.Element; layoutData: LayoutData }> = ({
  children,
  layoutData,
}) => {
  const [isLocaleDropdownOpen, setIsLocaleDropdownOpen] = React.useState(false);
  const [activeLocale, setActiveLocale] = React.useState(LOCALES[0]);

  const handleLocaleDropdownClick = (country: string, language: string) => {
    setIsLocaleDropdownOpen(!isLocaleDropdownOpen);

    if (country === 'canada' && language === 'en') {
      window.location.href = 'https://cozey.ca/';
    } else if (country === 'canada' && language === 'fr') {
      window.location.href = 'https://cozey.ca/fr/';
    } else if (country === 'us' && language === 'en') {
      window.location.href = 'https://cozey.com/';
    }
  };
  const footerDataLocal: FooterData = {
    newsletterInfoHeader: 'Join the Cozey Family',
    newsletterInfoText:
      'Stay ahead on product updates, future launches and exclusive content on all things Cozey.',
    newsletterInputPlaceholder: 'Email',
    newsletterInputSubmitText: 'SIGN UP',
    successSubscription: 'Thank you for subscribing!',
  };

  return (
    <div style={{ position: 'relative' }}>
      <GlobalStyle />
      <Topbar
        locales={LOCALES}
        isLocaleDropdownOpen={isLocaleDropdownOpen}
        setIsLocaleDropdownOpen={setIsLocaleDropdownOpen}
        activeLocale={activeLocale}
        handleLocaleDropdownClick={handleLocaleDropdownClick}
      />
      <div
        onClick={() => {
          if (isLocaleDropdownOpen) setIsLocaleDropdownOpen(false);
        }}
      >
        <MainNavigation />
        <div style={{ position: 'relative', bottom: 70 }}>
          <div>{React.cloneElement(children)}</div>
          <Footer
            data={
              layoutData && layoutData.footer
                ? layoutData.footer
                : footerDataLocal
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
