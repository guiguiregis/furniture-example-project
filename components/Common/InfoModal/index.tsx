import * as React from 'react';
import Image from 'next/image';
import { Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Container,
  Content,
  Description,
  Header,
  ImageWrapper,
  Minimum,
  Paragraph,
  Title,
} from './styles';

export interface LegData {
  title: string;
  minimumOrder?: string;
  description1: string;
  description2?: string;
  image?: string;
}

export const InfoModal = ({
  open,
  handleClose,
  data,
  productModal = false,
}: {
  open: boolean;
  handleClose: () => void;
  data?: LegData;
  productModal?: boolean;
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="leg-type-modal"
      style={{ zIndex: 9999999 }}
    >
      <Container style={{ zIndex: 9999999 }}>
        <Header productModal={productModal}>
          <Title>{data?.title}</Title>
          <CloseIcon onClick={handleClose} />
        </Header>
        <Content style={{ zIndex: 99999999 }}>
          {data?.image && (
            <ImageWrapper>
              <Image
                layout="fill"
                objectFit="contain"
                src={data?.image}
                alt="info image"
              />
            </ImageWrapper>
          )}
          <Description>
            {data?.minimumOrder && <Minimum>{data?.minimumOrder}</Minimum>}
            <Paragraph productModal={productModal}>
              {data?.description1}
            </Paragraph>
            <Paragraph productModal={productModal}>
              {data?.description2}
            </Paragraph>
          </Description>
        </Content>
      </Container>
    </Dialog>
  );
};
