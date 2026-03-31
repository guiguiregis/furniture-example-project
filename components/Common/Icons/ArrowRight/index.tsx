import { SvgIcon, SvgIconProps } from '@mui/material';

export const ArrowRight: React.FC<SvgIconProps> = ({ fill, ...rest }) => {
  return (
    <SvgIcon
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M18.5 6L17.07 7.393L24.65 15H4.5V17H24.65L17.07 24.573L18.5 26L28.5 16L18.5 6Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
