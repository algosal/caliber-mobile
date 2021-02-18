import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import 'enzyme-adapter-react-16';
import axios from 'axios';


import associateService from '../associate.service';


test('Test Axios request to GET associate singular', async ()=>{
    let returnValues;
    
    let obj = {data: []};
    axios.get = jest.fn().mockResolvedValue(obj);
    await associateService.getAssociate().then((arr:any) => {
        returnValues = arr;
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(returnValues).toBe(obj.data);
    expect(axios.get).toHaveBeenCalledWith('PLACEHOLDER FOR API URI');
});

test('Test Axios request to Put associate singular', async ()=>{
    let returnValues;
    
    let obj = {data: []};
    axios.put = jest.fn().mockResolvedValue(obj);
    await associateService.replaceAssociate().then((arr:any) => {
        returnValues = arr;
    });
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(returnValues).toBe(obj.data);
    expect(axios.put).toHaveBeenCalledWith('PLACEHOLDER FOR API URI');
});

test('Test Axios request to Patch associate singular', async ()=>{
    let returnValues;
    
    let obj = {data: []};
    axios.patch = jest.fn().mockResolvedValue(obj);
    await associateService.updateAssociate().then((arr:any) => {
        returnValues = arr;
    });
    expect(axios.patch).toHaveBeenCalledTimes(1);
    expect(returnValues).toBe(obj.data);
    expect(axios.patch).toHaveBeenCalledWith('PLACEHOLDER FOR API URI');
});