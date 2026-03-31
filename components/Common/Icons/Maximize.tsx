import { SvgIconProps, SvgIcon } from '@mui/material';

export const Maximize: React.FC<SvgIconProps> = ({
  fill = '#2B2C6E',
  ...rest
}) => {
  return (
    <SvgIcon
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1117_27473)">
        <path
          d="M20 2V4H26.586L18 12.582L19.414 14L28 5.414V12H30V2H20Z"
          fill={fill}
        />
        <path
          d="M14 19.416L12.592 18L4 26.586V20H2V30H12V28H5.414L14 19.416Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1117_27473">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
