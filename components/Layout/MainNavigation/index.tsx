import React, { useEffect, useState } from 'react';
import { useScrollTrigger } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { LogoWrapper, NavBar } from './styles';
import { HideOnScroll } from '../HideOnScroll';

const MainNavigation = () => {
  const [shouldNavTransparent, setShouldNavTransparent] = useState(false);
  const trigger = useScrollTrigger();
  const router = useRouter();

  useEffect(() => {
    // TODO remove this logic from this component and use a LayoutContext instead (like cozey-v2)
    if (
      router.pathname !== '/privacy' &&
      router.pathname !== '/terms' &&
      !router.pathname.includes('blog')
    ) {
      if (window.pageYOffset === 0) {
        setShouldNavTransparent(true);
      } else {
        setShouldNavTransparent(false);
      }
      window.onscroll = () => {
        if (window.pageYOffset === 0) {
          setShouldNavTransparent(true);
        }
      };
    }
  }, [router.pathname]);

  useEffect(() => {
    if (trigger) {
      setShouldNavTransparent(false);
    }
  }, [router.pathname, trigger]);

  return (
    <HideOnScroll>
      <NavBar
        position="sticky"
        color="default"
        elevation={0}
        style={{
          backgroundColor: shouldNavTransparent ? 'transparent' : 'white',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/">
          <LogoWrapper>
            {shouldNavTransparent && !router.pathname.includes('blog') ? (
              <Image
                priority
                fill
                style={{ objectFit: 'contain' }}
                src="/cozey-logo-white.svg"
                quality={100}
                alt="Cozey Logo"
              />
            ) : (
              <Image
                priority
                fill
                style={{ objectFit: 'contain' }}
                src="/cozey-logo.png"
                quality={100}
                alt="Cozey Logo"
              />
            )}
          </LogoWrapper>
        </Link>
      </NavBar>
    </HideOnScroll>
  );
};

export default MainNavigation;
