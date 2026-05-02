console.log(10 * 20 * 15 * 3 * 190 * 10 % 400);

let num = 3;
console.log(num+num); // 3+3

num = 3;
console.log(num*num-num); // 3*3-3

num=3;
console.log(num+true+true+true); // 3+1+1+1

num=3;
console.log(num**num/num-num); // 27 / 3 - 3

num=3;
console.log(--num * ++num); // 2*3

num=3;
console.log(++num + --num - true);//4 + 3 -1
//////////////////////////////////////////////////////
let num2 = +"10";
console.log(num2 + num2); // 10+10

num2 = +"10";
console.log(num2*num2 / (num2/(true+true))); // 100 / (10/2)

num2 = +"10";
console.log((true+true) * num2); //2*10

num2 = +"10";
console.log(num2**(true+true) / num2+num2 ); // 100/10 + 10
////////////////////////////////////////////////////////////
let points = 10;
points+= true + true + true ;
console.log(points); // 13
points-= true + true + true + true + true;
console.log(points); // 8;