import React from 'react';
import { mount } from 'enzyme';
import Accordion from './Accordion';
import AccordionSection from './AccordionSection';

describe('Accordion', () => {
  const title = 'bar';
  const content = 'foo';

  it('with default open and not allowMultipleOpen', () => {
    const wrapper = mount(
      <Accordion>
        <AccordionSection title={title}>{content}</AccordionSection>
        <AccordionSection isOpen title={title}>
          {content}
        </AccordionSection>
        <AccordionSection isOpen title={title}>
          {content}
        </AccordionSection>
      </Accordion>
    );
    const accordions = wrapper.find(AccordionSection);

    expect(accordions.filterWhere((e) => e.props().isOpen === true).length).toBe(1);

    accordions.forEach((e) => {
      expect(e.props().children).toBe(content);
      expect(e.props().onClick).toBe(wrapper.instance().onClick);
      expect(e.props().title).toBe(title);
    });
  });

  describe('allowMultipleOpen', () => {
    it('with default open and allowMultipleOpen', () => {
      const wrapper = mount(
        <Accordion allowMultipleOpen>
          <AccordionSection title={title}>{content}</AccordionSection>
          <AccordionSection isOpen title={title}>
            {content}
          </AccordionSection>
          <AccordionSection isOpen title={title}>
            {content}
          </AccordionSection>
        </Accordion>
      );
      const accordions = wrapper.find(AccordionSection);

      expect(accordions.filterWhere((e) => e.props().isOpen === true).length).toBe(2);
    });
  });
});
