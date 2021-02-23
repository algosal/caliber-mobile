import calQcStatus from './calQcStatus';
import {Status} from './batchWeekService'


// check the input of cal: array from database we set it temporarily as follows since we dont know what types of data we are getting
let qcStat: Status[] = ['GOOD', 'GOOD', 'GOOD', 'POOR', undefined];
// test calQcStatus logic is implemented correctly
let overallStatus: Status = 'GOOD';

test('that calQcStatus returns GOOD if input incluses mostly GOOD status', () => {
    expect(calQcStatus(qcStat)).toBe(overallStatus);
})