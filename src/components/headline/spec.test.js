import React from 'react';
import { shallow } from 'enzyme';

import '../../setupTest';
import Headline from './index';
import { findByTestAttr } from '../utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Headline  {...props} />);
  return component;
};

describe('Headline component', () => {

  describe('Have Props', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      }
      wrapper = setUp(props);
    })

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    })

    it('Should render a H1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    })

    it('Should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    })
  });

  describe('Have no props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    })

    it('Should not render', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    })
  });

})
