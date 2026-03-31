import { styled } from 'styled-components';
// import { FiChevronDown } from 'react-icons/fi';
import {
  Contact,
  Container,
  FooterExternalLink,
  FooterLinkWrapper,
  FooterLinksColumn,
  FooterLinksContainerDesktop,
  FooterLinksContainerMobile,
  FooterLinksList,
  SupportTitle,
} from './styles';
import SupportCard, { SupportItemContainer } from '../SupportCard';
import { ContactData } from './ContactData';
import { ArrowRight as ArrowRightIcon } from '../Common/Icons/ArrowRight';

export const ArrowRight = styled(ArrowRightIcon)`
  margin-left: 6px;
  transform: scale(0.6);
  @media (max-width: 1024px) {
    position: relative;
    top: 0px;
  }
`;

const ContactSection = () => {
  const { contactInfo } = ContactData('en');
  const data = [
    {
      links: [
        {
          url: 'https://www.youtube.com/channel/UCVA8BeFkyvd-vL6rL3VE-tg',
          title: 'Youtube',
        },
        {
          url: 'https://www.facebook.com/cozeycanada',
          title: 'Facebook',
        },
        {
          url: 'https://twitter.com/cozeycanada',
          title: 'Twitter',
        },
      ],
      links2: [
        {
          url: 'https://www.instagram.com/cozey/',
          title: 'Instagram',
        },
        {
          url: 'https://www.pinterest.ca/cozeycanada/',
          title: 'Pinterest',
        },
        {
          url: 'https://www.tiktok.com/@cozey.ca',
          title: 'Tiktok',
        },
      ],
      title: 'Let’s get social',
      handle: 'social',
    },
  ];
  return (
    <Container>
      <Contact>
        <FooterLinksContainerDesktop>
          {data.map((column: any) => (
            <FooterLinksColumn key={column.handle}>
              <SupportTitle>{column.title}</SupportTitle>
              <div style={{ display: 'flex', gap: '85px' }}>
                <FooterLinksList>
                  {column.links.map((link: any, index: any) => {
                    return (
                      <FooterLinkWrapper key={link.url}>
                        <FooterExternalLink
                          target="_blank"
                          href={link.url}
                          rel="noopener noreferrer"
                        >
                          {link.title}
                        </FooterExternalLink>
                        <ArrowRight />
                      </FooterLinkWrapper>
                    );
                  })}
                </FooterLinksList>
                <FooterLinksList>
                  {column.links2.map((link: any, index: any) => {
                    return (
                      <FooterLinkWrapper key={link.url}>
                        <FooterExternalLink
                          target="_blank"
                          href={link.url}
                          rel="noopener noreferrer"
                        >
                          {link.title}
                        </FooterExternalLink>
                        <ArrowRight />
                      </FooterLinkWrapper>
                    );
                  })}
                </FooterLinksList>
              </div>
            </FooterLinksColumn>
          ))}
        </FooterLinksContainerDesktop>
        <FooterLinksContainerMobile>
          {data.map((column: any) => (
            <FooterLinksColumn key={column.handle}>
              <SupportTitle>{column.title}</SupportTitle>
              <div style={{ display: 'flex', gap: '85px' }}>
                <FooterLinksList>
                  {column.links.map((link: any, index: any) => (
                    <FooterLinkWrapper key={link.url}>
                      <FooterExternalLink
                        target="_blank"
                        href={link.url}
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </FooterExternalLink>
                      <ArrowRight />
                    </FooterLinkWrapper>
                  ))}
                </FooterLinksList>
                <FooterLinksList>
                  {column.links2.map((link: any, index: any) => (
                    <FooterLinkWrapper key={link.url}>
                      <FooterExternalLink
                        target="_blank"
                        href={link.url}
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </FooterExternalLink>
                      <ArrowRight />
                    </FooterLinkWrapper>
                  ))}
                </FooterLinksList>
              </div>
            </FooterLinksColumn>
          ))}
        </FooterLinksContainerMobile>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%',
          }}
        >
          <SupportTitle>Get in touch with us</SupportTitle>
          <SupportItemContainer>
            {contactInfo.map(item => (
              <SupportCard key={item.link} data={item} />
            ))}
          </SupportItemContainer>
        </div>
      </Contact>
    </Container>
  );
};

export default ContactSection;
