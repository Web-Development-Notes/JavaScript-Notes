//ARITHMETIC EXPRESSION is a combination of: 
//operands(values,variables,etc.)
//operators(+,-,*,/,%)

//Value of arithmetic expression can be assigned to another variable

let students=20;
students=students+1;
students=students-1;
students=students/1;
let students1=50;
let extrastudents=students1%3;
students+=1;//augmented assignment operator(reAssigning)
students*=1;//augmented assignment operator(reAssigning)
students-=1;//augmented assignment operator(reAssigning)
students/=1;//augmented assignment operator(reAssigning)
students%=3;
//let students2+=50;(Syntax error)
console.log("students are ",students);
console.log("Extra students are ",extrastudents);
/*
operator precedence:-
1)paranthesis()
2)exponents
3)Multiplication, division
4)Add,Subtract
*/

let result =1+2*(3+4);

console.log("Result is:",result);

let result1 =(1+2)*(3+4);

console.log("Result1 is:",result1);
