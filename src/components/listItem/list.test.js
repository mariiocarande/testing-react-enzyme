import React from 'react';
import { shallow } from 'enzyme';

import '../../setupTest';
import { findByTestAttr, checkProps } from '../utils/index';
import ListItem from './index';

describe('ListemItem Component', () => {

  describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some Text',
      };
      const propsErrors = checkProps(ListItem, expectedProps);
      expect(propsErrors).toBeUndefined();
    });

  });

  describe('Component Renders', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some Text'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should renders without errors', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some Text'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'ListItemComponent');
      expect(component.length).toBe(0);
    });

  });
})