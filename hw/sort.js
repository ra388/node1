let arr = [];

for (let i = 0; i <100 ; ++i){
    let a = Math.floor(Math.random()*100+1);
    arr[i]=a;
}

arr.sort(function(a,b){
    return a-b;
});

console.log(arr);