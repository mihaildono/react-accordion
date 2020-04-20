import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AccordionSection from './components/AccordionSection';
import Accordion from './components/Accordion';

test('', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Accordion).length).toBe(1);
  expect(wrapper.find(AccordionSection).length).toBe(2);
  expect(wrapper.find('.app').length).toBe(1);
});
