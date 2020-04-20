import React from 'react';
import { mount } from 'enzyme';
import Accordion from './Accordion';
import AccordionSection from './AccordionSection';

describe('Accordion', () => {
  const title = 'bar';
  const content = 'foo';

  it('is Open', () => {
    const wrapper = mount(
      <Accordion>
        <AccordionSection title={title}>{content}</AccordionSection>
      </Accordion>
    );

    expect(wrapper.find(AccordionSection).props()).toStrictEqual({
      isOpen: false,
      children: content,
      onClick: wrapper.instance().onClick,
      title,
    });
  });
});
