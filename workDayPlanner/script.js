// adding my event listners
window.onload = function() {
    submit.addEventListener('click', e => {

        const startTime1 = document.getElementById("startTime").value;
        const startStatus = document.getElementById("startStatus").value;
        const endTime1  = document.getElementById("endTime").value;
        const endStatus = document.getElementById("endStatus").value;

        //creating dummy vars to manipulate
        var startTime = startTime1
        var endTime = endTime1
        //converting the dummy vars, in the case that they are in the form of PM
        var startConverted = start_conversion(startTime, startStatus)
        var endConverted = end_conversion(endTime, endStatus)



        var difference = difference_of_hours(startConverted, endConverted)
        //console.log(script(startTime1, startStatus, endTime1, endStatus, difference))
        alert(script(startTime1, startStatus, endTime1, endStatus, difference))
        }, false);

    reset.addEventListener('click', e => {
        console.log('You clicked the reset button')    
    }, false);
    }







// Functions
function script(startTime1, startStatus, endTime1, endStatus, difference){
    let startTime2 = startTime1
    let endTime2 = endTime1
    let startStatus2 = startStatus
    let endStatus2 = endStatus
    let difference2 = difference

    let script =  `
    You started at: ${startTime2}${startStatus2}
    You ended at: ${endTime2}${endStatus2}
    You worked a total of ${difference2} hours
    `    
    return script
}

function difference_of_hours(startTime, endTime){
    var startTime = new Date("01/01/2007 " + startTime).getHours();
    var endTime = new Date("01/01/2007 " + endTime).getHours();
    var diff = endTime - startTime 
    if(diff < 0){
        diff = startTime-endTime
        return diff
    }
    else return diff
}

function start_conversion(startTime, startStatus){
    if (startStatus =='pm'){
        switch(startTime){
            case '01:00:00':
                startTime = '13:00:00'
                break;
            case '02:00:00':
                startTime = '14:00:00'
                break;
            case '03:00:00':
                startTime = '15:00:00'
                break;    
            case '04:00:00':
                startTime = '16:00:00'
                break;     
            case '05:00:00':
                startTime = '17:00:00'
                break; 
            case '06:00:00':
                startTime = '18:00:00'
                break; 
            case '07:00:00':
                startTime = '19:00:00'
                break;
            case '08:00:00':
                startTime = '20:00:00'
                break;
            case '09:00:00':
                startTime = '21:00:00'
                break;    
            case '10:00:00':
                startTime = '22:00:00'
                break;     
            case '11:00:00':
                startTime = '23:00:00'
                break; 
            case '12:00:00':
                startTime = '24:00:00'
                
                break;                
        }
        return startTime   
}   
    else return startTime
}

function end_conversion(endTime, endStatus){
    if (endStatus =='pm'){
        switch(endTime){
            case '01:00:00':
                endTime = '13:00:00'
                break;
            case '02:00:00':
                endTime = '14:00:00'
                break;
            case '03:00:00':
                endTime = '15:00:00'
                break;    
            case '04:00:00':
                endTime = '16:00:00'
                break;     
            case '05:00:00':
                endTime = '17:00:00'
                break; 
            case '06:00:00':
                endTime = '18:00:00'
                break; 
            case '07:00:00':
                endTime = '19:00:00'
                break;
            case '08:00:00':
                endTime = '20:00:00'
                break;
            case '09:00:00':
                endTime = '21:00:00'
                break;    
            case '10:00:00':
                endTime = '22:00:00'
                break;     
            case '11:00:00':
                endTime = '23:00:00'
                break; 
            case '12:00:00':
                endTime = '24:00:00'
                break;                
    }
    return endTime            
}
else return endTime
}


