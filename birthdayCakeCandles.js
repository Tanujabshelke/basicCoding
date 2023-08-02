function birthdayCakeCandles(candles){
  var max =0, count = 0;
  for(var i=0 ; i< candles.length ;i++){
        if(max < candles[i]){
            max = candles[i];
            count =1
        }else if(max === candles[i]){
            count++
        }
  }
  console.log("count",count)
}

birthdayCakeCandles([4,2,4,4,2])