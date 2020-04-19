import React from 'react';
import { shallow } from 'enzyme';
import AccordionSection from './AccordionSection';

describe('AccordionSection', () => {
  const childStr = 'foo';
  const title = 'bar';

  it('is Open', () => {
    const wrapper = shallow(
      <AccordionSection isOpen title={title} onClick={() => {}}>
        {childStr}
      </AccordionSection>
    );
    expect(wrapper.find('#section-title').props().children).toBe(title);
    expect(wrapper.find('.section__content').props().children).toBe(childStr);
    expect(wrapper.find('.fa-caret-down').length).toBe(1);
    expect(wrapper.find('.fa-caret-right').length).toBe(0);
  });

  it('not Open', () => {
    const wrapper = shallow(
      <AccordionSection title={title} onClick={() => {}}>
        {childStr}
      </AccordionSection>
    );
    expect(wrapper.find('#section-title').props().children).toBe(title);
    expect(wrapper.find('.section__content').length).toBe(0);
    expect(wrapper.find('.fa-caret-down').length).toBe(0);
    expect(wrapper.find('.fa-caret-right').length).toBe(1);
  });
});
