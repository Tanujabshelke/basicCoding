function plusMinus(arr) {
    // Write your code here
    var positiveNumCount = 0;
    var negativeNumCount = 0;
    var zeroNumCount = 0;
    var arrLength = arr.length;
    for(var i=0 ; i<arrLength ; i++){
        if(arr[i] > 0){
            positiveNumCount++;
        }else if(arr[i] < 0){
            negativeNumCount++;
        }else{
            zeroNumCount;
        }
    }

    // console.log(positiveNumCount/arrLength);
    // console.log(negativeNumCount/arrLength);
    // console.log(zeroNumCount/arrLength);
    var str = 1.0000000;
    console.log(str.toFixed(2))

}

plusMinus([-4, 3, -9, 0, 4, 1])