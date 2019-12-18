import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Header from './index';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
})

describe('Header Component', () => {

  it('It should render without errors', () => {
    const component = shallow(<Header />);
    console.log(component.debug);
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  })
})