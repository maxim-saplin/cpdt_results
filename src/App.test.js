import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme, { shallow } from 'enzyme';
import App from './App';
import db from './data';

//Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  db.initFake();
});

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // test('snapshots', () => {
  //   const component = renderer.create(
  //     <App />
  //   );

  //   let tree = component.toJSON();

  //   expect(tree).toMatchSnapshot();
  // });

});