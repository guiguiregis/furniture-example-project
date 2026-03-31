import { Modal } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import Colors from '../../../constants/colors';

type ModalProps = {
  isOpen: boolean;
  handleClose?: any;
  children?: any;
  title?: string;
};

const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  height: 100%;
  width: 100%;

  z-index: 999999999;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  min-width: 636px;
  width: auto;
  height: auto;
  background: ${Colors.COZEY_WHITE};
  border-radius: 12px;
  outline: none;
  align-self: center;
  justify-self: center;
  gap: 14px;
  max-width: 596px;
  max-height: 90vh;

  @media (max-width: 800px) {
    padding: 19px 16px 16px;
    width: 100%;
    border-radius: 0px;
    min-width: 100%;
    max-height: 80vh;
  }
  @media (max-width: 400px) {
    padding: 32px 16px;
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* margin-left: 4px; */
`;

const ModalHeading = styled.span`
  font-family: 'CamptonMedium';
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  /* font-style: normal;
  font-size: 26px;
  line-height: 30px; */
  /* font-family: 'Larsseit Bold';
  font-style: normal; */
  font-size: 26px;
  line-height: 28px;

  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const CloseIcon = styled.img`
  cursor: pointer;

  @media (max-width: 1024px) {
    height: 12px;
    width: 12px;
  }
`;

interface BodyProps {
  overflowY?: string;
}

const BodyLayout = styled.div`
  overflow-y: auto;
  white-space: nowrap;
  width: 100%;
  overflow-x: hidden;
  padding-top: 12px;
  // padding-bottom: 12px;
`;

const CommonModal = ({
  isOpen = false,
  handleClose,
  children,
  title,
}: ModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <ModalLayout>
        <MainLayout>
          <Header>
            <ModalHeading>{title ?? 'Swatch preview'}</ModalHeading>
            <CloseIcon
              onClick={handleClose}
              src="/images/icons/close-icon.svg"
            />
          </Header>
          <BodyLayout>{children}</BodyLayout>
        </MainLayout>
      </ModalLayout>
    </Modal>
  );
};
export default CommonModal;
