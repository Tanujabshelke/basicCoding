function miniMaxSum(arr) {
    // Write your code here
    var min = 0 ;
    var max = 0;
    for(var i=0 ; i<arr.length ;i++){
        var sum = 0;
        for(var j=0 ; j<arr.length ;j++){
            if(i !== j){
                sum += arr[j];
            }
        }
        if(i == 0){
            min = max = sum;
        }
        if(sum >= max){
            max = sum;
        }else if(sum < min){
            min = sum;
        }
    }
    console.log(min ,max)

}


var arr = [20 ,4, 11, 20, 1]
// var arr = [140638725, 436257910 ,953274816 ,734065819 ,362748590]
// 1673711044 2486347135 
// 2264237270 2486347135
miniMaxSum(arr);


