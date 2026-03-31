import { SvgIcon, SvgIconProps } from '@mui/material';

export const PlusSign: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 7V0H7V7H0V9H7V16H9V9H16V7H9Z" fill="#19142B" />
    </SvgIcon>
  );
};
