import React from 'react';
import { mount } from 'enzyme';
import Accordion from './Accordion';

describe('Accordion', () => {
  const title = 'bar';
  const content = 'foo';

  it('with default open and not allowMultipleOpen', () => {
    const wrapper = mount(
      <Accordion>
        <Accordion.Section title={title}>{content}</Accordion.Section>
        <Accordion.Section isOpen title={title}>
          {content}
        </Accordion.Section>
        <Accordion.Section isOpen title={title}>
          {content}
        </Accordion.Section>
      </Accordion>
    );
    const accordions = wrapper.find(Accordion.Section);

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
          <Accordion.Section title={title}>{content}</Accordion.Section>
          <Accordion.Section isOpen title={title}>
            {content}
          </Accordion.Section>
          <Accordion.Section isOpen title={title}>
            {content}
          </Accordion.Section>
        </Accordion>
      );
      const accordions = wrapper.find(Accordion.Section);

      expect(accordions.filterWhere((e) => e.props().isOpen === true).length).toBe(2);
    });
  });
});
