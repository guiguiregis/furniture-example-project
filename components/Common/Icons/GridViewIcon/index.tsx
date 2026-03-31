import React from 'react';
import Colors from '../../../../constants/colors';

type Props = {
  onClick?: any;
  isActive: boolean;
};

export const GridViewIcon = ({ isActive = false, onClick }: Props) => {
  const fill = isActive
    ? Colors.COZEY_ULTRAMARINE_BLUE
    : Colors.COZEY_LIGHT_BLUE;
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M9 3H4.5A1.5 1.5 0 003 4.5V9a1.5 1.5 0 001.5 1.5H9A1.5 1.5 0 0010.5 9V4.5A1.5 1.5 0 009 3zm0 6H4.5V4.5H9V9zM19.5 3H15a1.5 1.5 0 00-1.5 1.5V9a1.5 1.5 0 001.5 1.5h4.5A1.5 1.5 0 0021 9V4.5A1.5 1.5 0 0019.5 3zm0 6H15V4.5h4.5V9zM9 13.5H4.5A1.5 1.5 0 003 15v4.5A1.5 1.5 0 004.5 21H9a1.5 1.5 0 001.5-1.5V15A1.5 1.5 0 009 13.5zm0 6H4.5V15H9v4.5zM19.5 13.5H15a1.5 1.5 0 00-1.5 1.5v4.5A1.5 1.5 0 0015 21h4.5a1.5 1.5 0 001.5-1.5V15a1.5 1.5 0 00-1.5-1.5zm0 6H15V15h4.5v4.5z"
      />
    </svg>
  );
};
