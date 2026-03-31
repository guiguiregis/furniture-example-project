import { SvgIconProps, SvgIcon } from '@mui/material';
import Colors from '../../../constants/colors';

export const EmailIcon: React.FC<SvgIconProps> = ({
  fill = Colors.COZEY_BLUE,
  ...rest
}) => {
  return (
    <SvgIcon
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6046_705)">
        <path
          d="M28.5 6H4.5C3.96957 6 3.46086 6.21071 3.08579 6.58579C2.71071 6.96086 2.5 7.46957 2.5 8V24C2.5 24.5304 2.71071 25.0391 3.08579 25.4142C3.46086 25.7893 3.96957 26 4.5 26H28.5C29.0304 26 29.5391 25.7893 29.9142 25.4142C30.2893 25.0391 30.5 24.5304 30.5 24V8C30.5 7.46957 30.2893 6.96086 29.9142 6.58579C29.5391 6.21071 29.0304 6 28.5 6ZM26.3 8L16.5 14.78L6.7 8H26.3ZM4.5 24V8.91L15.93 16.82C16.0974 16.9361 16.2963 16.9984 16.5 16.9984C16.7037 16.9984 16.9026 16.9361 17.07 16.82L28.5 8.91V24H4.5Z"
          fill="#F5F6F8"
        />
      </g>
      <defs>
        <clipPath id="clip0_6046_705">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
