import { SvgIcon, SvgIconProps } from '@mui/material';

export const LoadBar: React.FC<SvgIconProps> = ({ fill, ...rest }) => {
  return (
    <SvgIcon {...rest}>
      <rect width="56.6" height="8" fill={fill} />
    </SvgIcon>
  );
};
