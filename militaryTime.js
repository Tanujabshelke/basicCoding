function timeConversion(s) {
    // Write your code here
    var isAM = s.slice(-2) === 'AM';
    var militaryTime = "";
    var hours = Number(s.slice(0,2));

    if(isAM && (hours===12)){
        militaryTime = '00'+ s.slice(2,-2);
    }else if(!isAM && (hours<12)){
        militaryTime = hours+12 + s.slice(2,-2);
    }else{
        militaryTime = s.slice(0,-2);
    }
    console.log(militaryTime);

}

// timeConversion("07:05:45AM")
timeConversion("12:05:45PM")