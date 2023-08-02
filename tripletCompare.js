function compareTriplets(a, b) {
    var result = [];
    var alice=0 ,bob=0;
    for(var i=0 ; i<a.length ; i++){
        if(a[i]>b[i]){
            console.log("Hell")
            alice +=1
        }else if(a[i]<b[i]){
            bob +=1;
        }else if(a[i] === b[i]){
            return 0;
        }else{
            return 0;
        }
    }
    result=[alice,bob]
    
    console.log("result",result)
    
}

compareTriplets([1,6,10],[11,0,20]);

// function pattern(line){
//     var oddNum = 1;
    
//     for(var i=1 ; i<=line ; i++){
//         var temp = [];
//         for(var j=0 ;j<line-i ;j++){
//             temp.push(" ");
//         }

//         for(var k=0; k<oddNum ; k++){
//             temp.push("*");
//         }
//         oddNum +=2;
//         console.log("temp",temp.join(" ") )
//     }
// }

// pattern(3);