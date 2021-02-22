import React from 'react';
import { View, Button, TextInput } from 'react-native';
import { QcNote } from './batchWeekService';
import calQcStatus from './calQcStatus';

// array of qc data
let arr: QcNote[] =[];
export function overallStatus(){
    let calQcStat = calQcStatus(arr: any);
        calQcStat ='GOOD'
    return (
        <View>
            {calQcStat}
        </View>
    )
}
