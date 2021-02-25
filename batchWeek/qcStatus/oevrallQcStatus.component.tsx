import React from 'react';
import { View, Button, Text } from 'react-native';
// import { QcNote } from '../batchWeekService';
// import calQcStatus from '../calQcStatus';


 // convert props to array of status
 let arr = ['GOOD', 'GOOD', 'AVERAGE', 'AVERAGE', 'AVERAGE', 'POOR', 'undefined' ];
 let items =['GOOD', 'POOR', 'AVERAGE', 'SUPERSTAR', 'undefined']; 
 // pick icon for each status in items

let icons = ['GOOD', 'POOR', 'AVERAGE', 'SUPERSTAR', 'undefined'];
  //initialize hist and convert to histogram ;
  let hist: any ={
    GOOD: 0,
    AVERAGE: 0,
    POOR: 0,
    SUPERSTAR: 0,
    undefined: 0
  };
 // set initial qcStatus
  let qcStatus = 'undefined';

function calOverallStatus(){
 
  for(let item of arr){
      hist[item] = hist[item]+ 1;
  }

  // calculate average (mode at this point) but can use different average (like arithmetic avg) 
  // qcStatus(?) is a plain text now but should display icon

  for(let item of arr){
    if(hist[item] > hist[qcStatus]){
      qcStatus = item;
    }
  }

  
  // console.log(hist);
  // console.log(hist['GOOD'])


  return qcStatus;
}


function OverallQcStatusComponent(){

    return (
        <View>
           <Text> {calOverallStatus()}</Text>
        </View>
    )
}

export default OverallQcStatusComponent;