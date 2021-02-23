import { bindActionCreators } from 'redux';
import { Status } from './batchWeekService'

// let overallStatus : Status= undefined;
let hist= {
    undefinedTotal: 0, poorTotal: 0, averageTotal: 0, goodTotal: 0, superstarTotal: 0,
    overallTotal: 0, overallSatatus: undefined
 };

// I do not know what type of array I will receive from database and need to further refine logic here

export function calQcStatus(arr: Status[], flag: boolean = true){
    

    // flag true evaluates the overall average of all qc technical status in average
    // superstar 4, good 3, average 2, poor 1, undefined 
    // initially all tostal set to zero

    for(let item of arr){
        if(item === 'POOR'){
            hist.poorTotal++;
        } 
        else if(item ==='AVERAGE'){
            hist.averageTotal++;
        }
        else if(item ==='GOOD'){
            hist.goodTotal++;
        }
        else if(item==='SUPERSTAR'){
            hist.superstarTotal++;
        }
        else {
            hist.undefinedTotal++;
        }
    }
    hist.overallTotal = hist.poorTotal + hist.averageTotal + hist.goodTotal + hist.superstarTotal;
    if(hist.overallTotal!==0){
        let overallAverage = (1*hist.poorTotal + 2*hist.averageTotal + 3*hist.goodTotal + 4* hist.superstarTotal) /hist.overallTotal;
        if (overallAverage < 1.5 ){
            overallStatus = 'POOR';
        } else if(overallAverage < 2.5){
            overallStatus = 'AVERAGE';
        } else overallStatus ='GOOD'
    }

    
    // wrtie a logic to calculate overallNum and overallStatus with option for QA to override the overallStatus  
    // calculate overall technical status automaticaaly
        
    return overallStatus;
}

export default calQcStatus;
