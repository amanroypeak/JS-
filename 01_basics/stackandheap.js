//Stack(Primitive) and Heap(Non-Primitive)
// Stack
let myYT = "amanroy"

let anothername = myYT

anothername = "chai"

console.log(myYT);
console.log(anothername);

//HEAP

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email = "aman@google"

console.log(userOne.email);
console.log(userTwo.email);

