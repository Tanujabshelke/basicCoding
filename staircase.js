function staircase(n) {
    // Write your code here
    for(var i=1; i<=n ; i++){
        var temp = []
        for(var j=1 ; j<=n-i ;j++){
            temp.push(" ");
        }
        for(var k=0; k<i;k++){
            temp.push("#");
        }
        console.log(temp.join(""))
         
    }

}

staircase(5)