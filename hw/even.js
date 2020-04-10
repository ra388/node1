let arr = [];

for (let i = 0; i <100 ;i++){
    let a = Math.floor(Math.random()*100+1);
    
    if(a%2!=0){
        arr.push(a);
    }
}

console.log(arr);