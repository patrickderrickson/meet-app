import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from "../NumberOfEvents";
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App /> component', () => {
    let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test("testing to see if NumberOfEvents renders properly!", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(0);
  });
});

 

