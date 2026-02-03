function myname(){
   // console.log("A");
    //console.log("B");
    //console.log("C");
    //console.log("D");
}
myname()

//function addTwoNumbers(number1, number2){
   // console.log(number1+number2);
    function addTwoNumbers(number1, number2){
        let result = number1 + number2
        return result
}
//addTwoNumbers(3,5)
const result = addTwoNumbers(3,5)
//console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
    console.log("Please enter a username");
    return   
    }

    return `${username} just logged in`
}
//console.log(loginUserMessage("aman"));
//console.log(loginUserMessage());
function calculateCasrtPrice(...num1){
    return num1

}
//console.log(calculateCasrtPrice(200,400,500))

const user = {
    username: "Aman",
    price: 199
}
function handleObject(anyobject){
    console.log(`USername is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)

const arr = [200,300,400,500]

function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(arr));
