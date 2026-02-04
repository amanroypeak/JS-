const user = {
    username: "aman",
    price: 222,
    welcomemessage: function(){
        //console.log(`${this.username},welcome to website`);
        //console.log(this);
        
        
    }
    
}
//user.welcomemessage()
//user.username="sam"
//user.welcomemessage()
//console.log(this);

//function chai (){
  //  let username = "aman"
    //console.log(this.username);
    
//}
//chai()

//const chai = function () {
  //  let username = "aman"
    //console.log(this.username);
//}

//const chai = () => {
  //  let username = "aman"
    //console.log(this);
//}
//chai()
//const addTwo = (num1, num2) => {
 //   return num1 + num2
//}
//console.log(addTwo(2,4))

const addTwo = (num1, num2) =>num1 + num2
console.log(addTwo(3,4));
