import { NextRouter } from 'next/router';

export const handleContactLinkClick = (link: string, router: NextRouter) => {
  if (link.includes('live-chat')) {
    const heyDayStartIconContainer = window.document.getElementById(
      'HeydayStartIconContainer',
    );

    heyDayStartIconContainer?.click();
  } else {
    router.push(link);
  }
};
