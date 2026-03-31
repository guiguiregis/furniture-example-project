import React, { forwardRef } from 'react';
// import { CozeyInfo } from '../../../helpers/contentful';
import DOMPurify from 'dompurify';
import { SectionTitle } from '@/components/Section/styles';
import Accordion from '../../Common/Accordion';
import { BgContainer } from '../Warranty/styles';
import {
  AccordionSectionWrapper,
  Description,
  Layout,
  LinkWrapper,
  RichDescription,
} from './styles';
import { CozeyInfo } from '../../../../helpers/contentful/contentful.types';
import { PrimaryLink } from '../../Common/PrimaryLink';

type Props = {
  sectionTitle: string;
  sectionId?: string;
  data: CozeyInfo[];
  firstQuestionOpen?: boolean;
};

// eslint-disable-next-line react/display-name
const AccordionSection = forwardRef((props: Props, ref) => {
  const { sectionTitle, sectionId, data } = props;

  return (
    <div>
      <BgContainer>
        <Layout id={sectionId}>
          {sectionTitle !== '' && <SectionTitle>{sectionTitle}</SectionTitle>}
          <AccordionSectionWrapper>
            {data.map(
              (
                {
                  title,
                  description,
                  description1,
                  linkText,
                  linkUrl,
                  linkText2,
                  linkUrl2,
                  linkText3,
                  linkUrl3,
                  linkText4,
                  linkUrl4,
                },
                index,
              ) => (
                <Accordion
                  title={title}
                  key={title}
                  firstQuestion={props?.firstQuestionOpen && index === 0}
                >
                  {description1 && <Description>{description1}</Description>}
                  {description && (
                    <RichDescription
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(description ?? ''),
                      }}
                    />
                  )}
                  {linkText && linkUrl && (
                    <LinkWrapper>
                      <PrimaryLink
                        external
                        color="blue"
                        showArrow
                        href={linkUrl}
                      >
                        {linkText}
                      </PrimaryLink>
                    </LinkWrapper>
                  )}
                  {linkText4 && linkUrl4 && (
                    <LinkWrapper>
                      <PrimaryLink
                        external
                        color="blue"
                        showArrow
                        href={linkUrl4}
                      >
                        {linkText4}
                      </PrimaryLink>
                    </LinkWrapper>
                  )}
                  {linkText2 && linkUrl2 && (
                    <LinkWrapper>
                      <PrimaryLink
                        external
                        color="blue"
                        showArrow
                        href={linkUrl2}
                      >
                        {linkText2}
                      </PrimaryLink>
                    </LinkWrapper>
                  )}
                  {linkText3 && linkUrl3 && (
                    <LinkWrapper>
                      <PrimaryLink
                        external
                        color="blue"
                        showArrow
                        href={linkUrl3}
                      >
                        {linkText3}
                      </PrimaryLink>
                    </LinkWrapper>
                  )}
                </Accordion>
              ),
            )}
          </AccordionSectionWrapper>
        </Layout>
      </BgContainer>
    </div>
  );
});

export default AccordionSection;
