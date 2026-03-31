import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import { handleContactLinkClick } from '@/lib/handleContactLinkClick';

export const SupportItemContainer = styled.div`
  border-radius: 10px;
  max-width: 420px;
  width: 100%;
  border: 1px solid #f5f6f8;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  @media (max-width: 700px) {
    max-width: 364px;
  }
  @media (max-width: 550px) {
    max-width: unset;
  }
`;

export const SupportItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f5f6f8;
  padding: 23px 24px;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    padding: 16px;
  }
`;

export const SupportIconWrapper = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  bottom: -1.5px;

  @media (max-width: 1024px) {
    height: 16px;
    width: 16px;
  }
`;

// export const SupportIcon = styled(Image)``;

export const SupportText = styled.span`
  margin-left: 16px;
  font-family: 'Larsseit';
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #f5f6f8;

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SupportDescription = styled.span`
  display: flex;
  align-self: flex-end;
  color: #bec8db;
  font-size: 18px;
  line-height: 20px;
  font-family: 'Larsseit Light';

  & a {
    color: #bec8db;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 14px;
  }
`;

interface SupportCardProps {
  data: {
    text: string;
    link: string;
    icon: string;
    description: string;
  };
}

const SupportCard: FC<SupportCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <SupportItem onClick={() => handleContactLinkClick(data.link, router)}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SupportIconWrapper>
          <Image
            quality={100}
            src={data.icon}
            layout="fill"
            objectFit="contain"
            alt="icon"
          />
        </SupportIconWrapper>
        <SupportText>{data.text}</SupportText>
      </div>
      <SupportDescription style={{ color: '#BEC8DB !important' }}>
        {data.description}
      </SupportDescription>
    </SupportItem>
  );
};

export default SupportCard;
