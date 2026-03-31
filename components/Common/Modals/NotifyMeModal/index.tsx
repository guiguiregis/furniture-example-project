import { useState } from 'react';
import { GetNotifiedButton } from './styles';
import { NotifyModal } from '../NotifyModal';
import { EmailIcon } from '../../Icons/EmailIcon';

interface NotifyMeModalProps {
  data: {
    getNotifiedButtonText: string;
    getNotifiedDialogTitle: string;
    notifyMeButtonText: string;
    notifySuccessText: string;
    getNotifiedDialogSubtitle: string;
    getNotifiedInputPlaceholder: string;
    klaviyoId: string;
    invalidInputText: string;
  };
}

export const NotifyMeModal: React.FC<NotifyMeModalProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ width: '100%' }}>
      <GetNotifiedButton
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleClickOpen}
      >
        {data.getNotifiedButtonText}
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 16,
            transform: 'scale(1.2)',
          }}
        >
          <EmailIcon />
        </span>
      </GetNotifiedButton>
      {open && <NotifyModal data={data} isOpen={open} setIsOpen={setOpen} />}
    </div>
  );
};
