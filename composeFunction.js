var compose=(functions)=>{
    
    return function(x){
        console.log("x",x);
        var temp = functions.reduceRight((acc,current)=>{
         console.log('a',acc,'cur',current,'x',x);
          return current(acc);
        },x)
        console.log("temp",temp)
    }
}

var fn = compose([x=>x+1 ,x=>x*x]);
fn(2);