import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';

import rootreducer from '../../redux/reducers';
import { middlewares } from '../../createStore';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

export const checkProps = (component, expectedProps) => {
  const propErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
  return propErr;
}

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootreducer, initialState)
}