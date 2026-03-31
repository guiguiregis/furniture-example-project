import { SvgIcon, SvgIconProps } from '@mui/material';

export const MinusSign: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      width="16"
      height="2"
      viewBox="0 0 16 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 0H0V2H16V0Z" fill="#19142B" />
    </SvgIcon>
  );
};
