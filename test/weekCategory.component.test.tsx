//import 'jsdom-global/register';
import  React from 'react'; 
import {View, Text} from 'react-native'; 

import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeekCategory from '../weekCategory/weekCategory.component.tsx';
import CategoryAdd from './testComp';


configure({ adapter: new Adapter() })



describe('tests for weekCategory.component', ()=>{
    test('that category displays correctly', ()=>{
       
        const wrapper =  shallow(<CategoryAdd/>); 
        expect(wrapper.debug().length).toBeGreaterThan(0);  
        console.log(wrapper.debug()); 
    });
    
    test('that the button calls deleteCategory from categoryService and refreshes list', () =>{
        const mockFunction = jest.fn();
        const wrapper =  shallow(<WeekCategory/>); 
        var WeekCategoriesLength= wrapper.find('WeekCategories').length;
        wrapper.find('WeekCategories').simulate('click');
        var WeekCategoriesNewLength = wrapper.find('WeekCategories').length;
        expect(WeekCategoriesNewLength).toBe(WeekCategoriesLength-1); 
        console.log(wrapper.containsAllMatchingElements([<CategoryAdd />]));   
        });
});