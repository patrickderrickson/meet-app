import React from 'react';
import { shallow } from 'enzyme';
import  Event  from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('render an event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    })

    test('render a location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    })

    test('render the summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    })

    test('render the date', () => {
        expect(EventWrapper.find('.start-date')).toHaveLength(1);
    })
})