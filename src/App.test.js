import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

test('', () => {
  const appWrapper = shallow(<App/>)
  expect(appWrapper.find('.app-container').length).toBe(1)
});
