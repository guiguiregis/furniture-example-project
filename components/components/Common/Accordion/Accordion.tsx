import { useState } from 'react';
import { PlusSign } from '../Icons/PlusSign';
import { MinusSign } from '../Icons/MinusSign';
import { Title, Summary, Main, Details } from './styles';

type AccordionProps = {
  title: string;
  children?: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Main expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <Summary
          expandIcon={expanded ? <MinusSign /> : <PlusSign />}
          aria-controls={`${title}-content`}
          id={`${title}-header`}
        >
          <Title>{title}</Title>
        </Summary>
        <Details>{children}</Details>
      </Main>
    </div>
  );
};

export default Accordion;
