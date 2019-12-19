import React from 'react';
import { shallow } from 'enzyme';

import '../../setupTest';
import Header from './index';
import { findByTestAttr } from '../utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    // console.log(component.debug());
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  })

  it('Should render the logo', () => {
    // console.log(component.debug());
    const logo = findByTestAttr(component, 'logoIMG');
    expect(logo.length).toBe(1);
  })
})