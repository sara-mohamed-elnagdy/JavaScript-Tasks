// let theTitle="Elzero",decsContent="Elzero Web School",dateContent="25/10";
// let content=`
//     <div>
//         <h3>Hello ${theTitle}</h3>
//         <p>${decsContent}</p>
//         <span>${dateContent}</span>
//         <hr>
//     </div>    
// `;
// document.write(`${content.repeat(4)}`);

let numberOne = 10 , numberTwo = 20;

// Ouput
console.log(numberOne+"" + numberTwo); 
console.log(typeof(numberOne+"" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof`${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne+"\n"+numberTwo);
console.log(`${numberOne}
${numberTwo}`);

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log("`I\'m In \n \\\\ \n Love \\\\\"\"\" \'\'\'\n++ with ++\n\\\"\"\"\\\"\"\"\n\"\"javascript\"\"``");

let a =20 , b=21;
let ab = `_${a}${b}`
console.log(`_${b}`+ab.repeat(3)+`_${a}_`)