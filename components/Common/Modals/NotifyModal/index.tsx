import { CircularProgress } from '@mui/material';
import React from 'react';
import { useNotifyNewsletter } from '@/hooks/useNotifyNewsletter';
import CommonModal from '../../Modal';
import {
  Button,
  Field,
  FieldAreaWrapper,
  Headline,
  Info,
  InputFieldWrapper,
  NotifyModalLayout,
} from './styles';

interface ModalData {
  getNotifiedButtonText: string;
  getNotifiedDialogTitle: string;
  notifyMeButtonText: string;
  notifySuccessText: string;
  getNotifiedDialogSubtitle: string;
  getNotifiedInputPlaceholder: string;
  invalidInputText: string;
  klaviyoId: string;
}

interface NotifyModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: ModalData;
}

export const NotifyModal = ({ isOpen, setIsOpen, data }: NotifyModalProps) => {
  const [email, setEmail] = React.useState<string>('');

  const { emailSubscribed, emailLoading, handleNewsletter, emailErrorMessage } =
    useNotifyNewsletter(data.klaviyoId, 'Cylindo - Yours to Customize');

  const getInfoMessage = () => {
    if (emailErrorMessage) {
      return data.invalidInputText;
    }

    if (emailSubscribed) {
      return data.notifySuccessText;
    }
    return null;
  };

  return (
    <div>
      {isOpen && (
        <CommonModal
          title={data.getNotifiedDialogTitle}
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
        >
          <NotifyModalLayout>
            <Headline>{data.getNotifiedDialogSubtitle}</Headline>
            <FieldAreaWrapper>
              <InputFieldWrapper>
                <Field
                  id="email"
                  name={data.getNotifiedInputPlaceholder}
                  type="text"
                  value={email}
                  placeholder={data.getNotifiedInputPlaceholder}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button
                  disabled={emailSubscribed}
                  onClick={() => handleNewsletter(email)}
                >
                  {emailLoading ? (
                    <CircularProgress size="1rem" color="inherit" />
                  ) : (
                    <span>{data.notifyMeButtonText}</span>
                  )}
                </Button>
              </InputFieldWrapper>
              {!!getInfoMessage() && (
                <Info warning={!!emailErrorMessage}>{getInfoMessage()}</Info>
              )}
            </FieldAreaWrapper>
          </NotifyModalLayout>
        </CommonModal>
      )}
    </div>
  );
};
