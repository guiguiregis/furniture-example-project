import React, { useState } from 'react';
import AccordionSection from '@/components/components/Pages/FAQ/AccordionSection';
import { Summary } from '@/components/components/Common/Accordion/styles';
import { useMediaQuery } from '@mui/material';
import { MinusSign } from '@/components/components/Common/Icons/MinusSign';
import { PlusSign } from '@/components/components/Common/Icons/PlusSign';
import { CozeyInfo } from '@/helpers/contentful/contentful.types';
import { TitleContainer, Title } from './styles';

const OurCollections = () => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const questionTiles: CozeyInfo[] = [
    {
      title: 'Who is Cozey?',
      description1:
        'Cozey is a North American furniture brand known for its thoughtfully designed products, a great shopping experience and 7-star customer service. With a strong commitment to addressing common issues and frustrations prevalent in the furniture industry, Cozey has emerged as a go-to solution for providing a faster, easier, and effortless experience. Cozey sofas arrive in the United States to set the tone for comfort, simplicity, and convenience, at an affordable price.',
    },
    {
      title: 'What sets Cozey apart?',
      description1:
        "At Cozey, we focus on providing a modern, convenient, and simple shopping experience to our customers. Our modular designs allow you to expand your sofa over time, as your space and needs evolve. With the augmented reality function and free swatches, you can view the sofa in your home and choose the color that's just right for you! When you're ready to order, we take care of swiftly shipping all your items, for free and quickly. We also offer a 30-day risk-free trial to ensure peace of mind. Should you encounter any issues, our stellar customer happiness team is here to assist you at any point in time.",
    },
  ];

  const hiddenQuestionTiles: CozeyInfo[] = [
    {
      title: 'When is Cozey launching in the USA?',
      description1: 'Cozey is coming to the USA in the early summer of 2023.',
    },
    {
      title: 'Will prices in the USA be the same as in Canada?',
      description1:
        'We aim to offer the same value wherever we are. While we strive to maintain the same level of value across different markets, it is important to note that there may be slight pricing differences due to foreign exchange rates and varying cost structures between the USA and Canada. We remain as committed as ever to delivering our quality products that keep exceeding your expectations.',
    },
    {
      title: 'Will shipping in the USA be as quick as in Canada?',
      description1:
        'Yes! You can expect fast and free shipping within 5 business days across the country, excluding Alaska and Hawaii. We understand the importance of timely delivery, and our commitment to efficient logistics ensures that your Cozey products arrive at your doorstep promptly without any additional shipping charge. With Cozey entering the United States market, get ready to shop undisturbed, with the convenience of fast delivery in mind.',
    },
    {
      title:
        'Are all Cozey furniture and sofa collections available in the USA?',
      description1:
        'We are working hard to get all of our products available in the USA, with most of our offerings available at launch! Some exceptions may apply.',
    },
  ];

  return (
    <>
      <AccordionSection
        data={questionTiles}
        sectionId="nav?.sections?.[1]"
        sectionTitle="Got questions?"
        firstQuestionOpen
      />
      {expanded && (
        <AccordionSection
          data={hiddenQuestionTiles}
          sectionId="nav?.sections?.[1]"
          sectionTitle=""
        />
      )}
      <TitleContainer>
        <Summary
          expandIcon={
            // eslint-disable-next-line no-nested-ternary
            expanded ? (
              isMobile ? (
                <MinusSign style={{ fontSize: '8px' }} />
              ) : (
                <MinusSign style={{ fontSize: '16px' }} />
              )
            ) : isMobile ? (
              <PlusSign style={{ fontSize: '8px' }} />
            ) : (
              <PlusSign style={{ fontSize: '16px' }} />
            )
          }
          aria-controls="more-content"
          id="more-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Title>{expanded ? 'See less' : 'See more'}</Title>
        </Summary>
      </TitleContainer>
    </>
  );
};

export default OurCollections;
