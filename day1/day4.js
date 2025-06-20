//if-else
a=8
if (a%2==0)
    {
    console.log("its an even number")
}
else{
    console.log("its an odd number ")
}
while (a<10)
{
    console.log(a)
   
    if(a==8){
        break
    }
    a++
   
}

//for loop

for (let a=0;a<10;a++)
{
    console.log(a)
    
}   
for(let i=1;i<6;i++){
    for(let j=1;j<=i;j++){
        console.log("*",end = "")
    }
    console.log("\n")
} 

//functions

function add(a,b){
    return a+b;
}
let c = add(5,6);
console.log(c)
let a=10;
let b=20;
let m=(a,b)=>(console.log(a*b));
m(a,b)

//arrays

let arr = [1,2,'dilip',4,5];
console.log (arr.push(6));
console.log (arr.pop(3));
console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.map(b=>     b*2));
console.log(arr.filter( b => "dilip"===b));
console.log(arr.reduce(b=>   b+2,0));
 
//objects
function greet(){
    return "Hello, World!";
}
function add(a, b) {
     console.log(a)
     console.log(b())
}

add(5, greet)

//sets
"use strict"
 abc= new Set ([1,2,3,5,5,6,6,8,9,10]);
console.log(abc)
console.log(abc.add(11));
abc.delete(3);
console.log(abc)
console.log(abc.has(2));
console.log(abc.size);
abc.clear();
console.log(abc);

//closure

function outer (){
    let age = 89
    function inner(){

        console.log("hello"+age)
    }
    return inner
}
let abc=outer()
abc()

//setting timeouts and intervals
console.log("1")
setTimeout(() => {
    console.log("3")
},4000)
console.log("2")

console.log("1")
setInterval(() => {
    console.log("3")
},4000)
console.log("2")

//intervals
let i=1
setInterval(()=>{
    if(i>5){
        i =1
        }    if (i<=5){
        console.log(i)
        i++;
        
        
    }
}
,3000)