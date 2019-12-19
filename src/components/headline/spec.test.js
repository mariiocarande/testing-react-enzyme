import React from 'react';
import { shallow } from 'enzyme';

import '../../setupTest';
import Headline from './index';
import { findByTestAttr, checkProps } from '../utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Headline  {...props} />);
  return component;
};

describe('Headline component', () => {

  describe('Checking Proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
          fname: 'Test fName',
          lname: 'Test lName',
          email: 'test@email.com',
          age: 23,
          statusOnline: false,
        }]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined()
    });
  })

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
