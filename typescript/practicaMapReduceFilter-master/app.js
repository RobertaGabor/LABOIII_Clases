 
//Map
let nums = [1,2,3,4,5,6];
let numSqrt =[];

for(let i=0;i<nums.length;i++){
    numSqrt[i] = nums[i]*nums[i];
}

console.log("Numero con foreach :",numSqrt);

console.log("Numero con map: ",nums.map(function (item){
    return item*item;
}));
console.log("Numeros con arrowfunction : ",nums.map(num => num*num));//num es como item en foreach



//Filter

let numFiltered =[];

let j=0;
for(let i=0;i<nums.length;i++){
    if(nums[i]>3){
        numFiltered[j]= nums[i];     
        j++;
    }
}

console.log("Numeros mayores a 3 : ",numFiltered);

console.log("Numeros mayores a 3 con filter :",nums.filter(function(num){
    return num>3; //retorna el true or false no el item
}));

console.log("Numeros mayeres a 3 con arrowfuntion: ",nums.filter(num=>num>3));

//Reduce
let total =0;

for (let i=0;i<nums.length;i++){
    total +=nums[i];
}

console.log("Sumatoria de numeros: ",total);

var n  = nums.reduce(function(total,num){
    return total+=num;
},0);//0 es valor iniciald e total

console.log("Sumatoria de numeros con reduce: ",n);


 