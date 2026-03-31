import { SvgIcon, SvgIconProps } from '@mui/material';

export const CircleOutline: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <path d="M11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6Z" />
    </SvgIcon>
  );
};
