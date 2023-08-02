function reduce(nums,fn,init){
    var accumlator = init || 0;
    for(var i=0 ; i<nums.length ; i++){
        accumlator = fn(accumlator,nums[i]);
    }
    return accumlator;
}

reduce([{id:1,val:"red",code:2},{id:2,val:"blue",code:1},{id:3,val:'green',code:2}],fn,0);

function fn(acc,curr){
    console.log("cuu",curr,"a",acc)
    if(curr['code'] === 2){
        return acc + curr['code'] ;
    }else{
        return acc;
    }
    
}

