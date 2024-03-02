// Your code here
function calculateHours(startStamp, endStamp){
    const start = new Date(startStamp);
    const end = new Date(endStamp);
    const diffMs = end-start;
    const diffHrs = diffMs / (1000 * 60 * 60); // convert milliseconds to hours
    return Math.abs(diffHrs); 
}

function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
}

function createTimeInEvent(employee, dateStamp) {
    const [date, time] = dateStamp.split(' ');
    const [year, month, day] = date.split('-');
    const hour = time.slice(0,2);
    const minute = time.slice(2);
    const dateTime  = new Date(year, month-1, day, hour, minute);
    employee.timeInEvents.push({type: 'TimeIn', hour: parseInt(hour + minute), date });
    return employee;
}