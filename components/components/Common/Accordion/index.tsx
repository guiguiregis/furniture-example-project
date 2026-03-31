import { useState } from 'react';
import { PlusSign } from '../Icons/PlusSign';
import { MinusSign } from '../Icons/MinusSign';
import { Title, Summary, Main, Details } from './styles';

type AccordionProps = {
  title?: string;
  children?: React.ReactNode;
  bgColor?: string;
  firstQuestion?: boolean;
};

const Accordion = ({
  title,
  children,
  bgColor,
  firstQuestion,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(
    firstQuestion ? 'panel1' : false,
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Main
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        disableGutters
        bgcolor={bgColor}
      >
        <Summary
          bgcolor={bgColor}
          expandIcon={
            expanded ? (
              <MinusSign style={{ fontSize: '16px' }} />
            ) : (
              <PlusSign style={{ fontSize: '16px' }} />
            )
          }
          aria-controls={`${title}-content`}
          id={`${title}-header`}
        >
          <Title>{title}</Title>
        </Summary>
        <Details bgcolor={bgColor}>{children}</Details>
      </Main>
    </div>
  );
};

export default Accordion;
