function diagonalDifference(arr) {
    // Write your code here
    var ltrSum = 0;
    var rtlSum = 0;
    var difference = 0;
    var j = arr.length-1
    for(var i=0 ; i<arr.length ; i++){
        ltrSum += arr[i][i] 
        rtlSum +=arr[i][j];
        j--
        console.log(ltrSum ,rtlSum)
    }
   
     difference = Math.abs(ltrSum - rtlSum);
     console.log(difference)
     return difference;

}

// diagonalDifference([[11 ,2, 4], [4, 5, 6], [10, 8 ,-12]]);
diagonalDifference([[0,1],[5,-4]])