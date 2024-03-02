// Your code here
function calculateHours(startStamp, endStamp){
    const start = new Date(startStamp);
    const end = new Date(endStamp);
    const diffMs = end-start;
    const diffHrs = diffMs / (1000 * 60 * 60); // convert milliseconds to hours
    return Math.abs(diffHrs); 
}