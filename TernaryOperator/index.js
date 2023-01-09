//ternary operator=Shortcut for an if/else statement

//takes 3 operands

// 1. condition with ?
// 2. expression if true :
// 3. expression if false

// condition ? Expression if true : Expression if false



let adult=checkAge(21);
console.log(adult);

function checkAge(a)
{
    // if(a>=18)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }
    return a>=18 ? true : false;
}
checkWinner(0);
function checkWinner(win)
{
    win? console.log("you win!") : console.log("you lose!");
}
