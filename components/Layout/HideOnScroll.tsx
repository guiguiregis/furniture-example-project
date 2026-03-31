import { Slide, useScrollTrigger } from '@mui/material';
import { useRouter } from 'next/router';

export const HideOnScroll = (props: {
  children: React.ReactElement;
  dontHidePath?: string;
}) => {
  const { children, dontHidePath } = props;
  const { asPath } = useRouter();

  const trigger = useScrollTrigger();
  return (
    <Slide
      appear={false}
      timeout={100}
      direction="down"
      in={asPath !== dontHidePath ? !trigger : true}
    >
      {children}
    </Slide>
  );
};
