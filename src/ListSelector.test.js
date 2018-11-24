import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme, { shallow } from 'enzyme';
import ListSelector from './ListSelector';
import db from './data';

//Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  db.initFake();
});

describe('ListSelector', () => {

  it('renders empty without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListSelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with items without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListSelector  items={db.dictionaries.getTests()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shortcuts are created', () => {
    const component = renderer.create(
      <ListSelector items={db.dictionaries.getTests()}  />
    ).getInstance();

    expect(component.shortcuts.size).toBe(3);
  });

  it('for repeated shortcuts there are arrays values in the Map', () => {
    const component = renderer.create(
      <ListSelector items={db.dictionaries.getTests()}  />
    ).getInstance();

    //[S]equential write[S]equential read[R]andom write (4KB)[R]andom read (4KB)[M]emory copy
    expect(component.shortcuts.get('s').length).toBe(2);
    expect(component.shortcuts.get('r').length).toBe(2);
  });

  it('key press is handled without errors', () => {
    let key = "";
    
    const component = renderer.create(
      <ListSelector items={db.dictionaries.getTests()} itemClick={(k) => key = k} />
    ).getInstance();

    component.keyPress({key: 'm'});
    //[S]equential write[S]equential read[R]andom write (4KB)[R]andom read (4KB)[M]emory copy
    //[M] - m - memCopy
    expect(key).toBe('memCopy');
  });

  test('snapshots', () => {
    const component = renderer.create(
      <ListSelector items={db.dictionaries.getTests()}  />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});