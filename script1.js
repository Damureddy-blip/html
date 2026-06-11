let amount = 2000;
let notes500 = 0, notes200 = 0, notes100 = 0;
if (amount % 100 != 0) {
    console.log("Invalid Amount");
}
else {
    notes500 = Math.floor(amount / 500);
    amount = amount % 500;
    notes200 = Math.floor(amount / 200);
    amount = amount % 200;
    notes100 = Math.floor(amount / 100);
    console.log("500 Notes = " + notes500);
    console.log("200 Notes = " + notes200);
    console.log("100 Notes = " + notes100);
    console.log("Withdrawal Successful"); 
}
function cook()
{
console.log("pour the flour in Tawa");
console.log("rub it round order with gareta");
console.log("spill some oil about it then wait");
console.log("twist it with dosa gareta");
console.log("At last gently serve it to damu");
}
for(let i=1;i<=3;i++)
{
    cook();
}
function add(a,b)
{
    return a+b;
}
let sum=add(7,9);
console.log(sum);
function guessNumber(n)
{
    let guess = Number(prompt("Enter a number:"));

    if (n == guess)
    {
        console.log("You guessed it right:",+guess);
    }
    else if (n < guess)
    {
        console.log("Try a smaller number:",+guess);
        guessNumber(n);
    }
    else
    {
        console.log("Try a bigger number:",+guess);
        guessNumber(n);
    }
}
let number = Math.floor(Math.random() * 100) + 1;
guessNumber(number);
function num(n)
{
    if(n>10)
    {
     return;   
    }
    console.log(n);
    n+=1;
    num(n);
}
num(1);