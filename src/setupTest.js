import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

export default Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
})
