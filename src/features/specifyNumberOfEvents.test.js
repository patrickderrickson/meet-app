import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
      given('user opens the website', () => {
        AppWrapper = mount(<App />);
      });
  
    

    when('the user doesn’t edit the specified number', () => {
      
    });
  
    then('the user should see a list of 32 events', () => {
        expect(AppWrapper.find('.events')).toHaveLength(32);
      });
    });
  
    test('User can change the number of events they want to see.', ({ given, when, then }) => {


        given('user opens the web page', async() => {
            AppWrapper = await mount(<App />);
        });
  
       when('the user edits the amount of events to view', () => {
        AppWrapper.update();
            AppWrapper.find('.number_of_events').simulate("change", { target: { value: 1 } });
        });
  
        then('the user should see a new list of events with the specified number', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".events")).toHaveLength(1);
        });
      });
  
  });