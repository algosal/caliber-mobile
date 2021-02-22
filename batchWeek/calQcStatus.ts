import { Status } from './batchWeekService'


// I do not know what type of array I will receive from database and need to further refine logic here

function calQcStatus(arr: [] ){
    let overallNum =0;
    let flag: boolean = false;
    // wrtie a logic to calculate overallNum and overallStatus with option for QA to override the overallStatus  
    // calculate overall technical status automaticaaly
let goodNum=0;
let poorNum=0;
let averageNum=0;
let superstarNum=0;
let undefinedNum =0;
let totalNum =0;

for(let item of arr){
    // increment num based on whehter status is good or ...
}
// write a logic how many goodNum, poorNum, ... averageNum, superNum;
// write a logic from overallAvg to assign overallStatus ('GOOD', "POOR", ...)
totalNum = goodNum + poorNum + averageNum + superstarNum;
let overallAvg = (poorNum*1 + goodNum*2 + averageNum*3 + superstarNum*4)/ (totalNum);
let overallStatus: Status = 'GOOD'
    

    overallStatus = 'GOOD';
    if(flag){
        overallStatus = 'AVERAGE';
    }
    return overallStatus;
}

export default calQcStatus;
