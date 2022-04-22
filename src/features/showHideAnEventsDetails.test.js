import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {
      given('user views the main page', () => {
        AppWrapper = mount(<App />);
      });
  
    

    when('the user views an event', () => {
      
    });
  
    then('the event details should be collapsed', () => {
        expect(AppWrapper.find('.event_details')).toHaveLength(0);
      });
    });
  
    test('User can expand an event to see its details', ({ given, when, then }) => {


        given('user finds an event they want to view', async() => {
            AppWrapper = await mount(<App />);
        });
  
       when('the user clicks to expand the details', () => {
        AppWrapper.update();
            AppWrapper.find('.details_button').at(0).simulate('click');
        });
  
        then('the user should see the details of an event displayed', () => {
            expect(AppWrapper.find(".event__details")).toHaveLength(1);
        });
      });
  
  
    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {

        let AppWrapper;

        given('user is viewing an event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.details_button').at(0).simulate('click');
            expect(AppWrapper.find('.event__details')).toHaveLength(1);
        });
  
      when('the user clicks to collapse the event details', () => {
        AppWrapper.find('.details-button').at(0).simulate('click');
        });
  
      then('the user should see the details of the event collapsed', () => {
        expect(AppWrapper.find('.extra-details')).toHaveLength(0);
      });
    });
  });