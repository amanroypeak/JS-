//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    [mySym]: "mykey1",
    age:25,
    location:"Bengal",
    email: "aman@google",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(JsUser["email"]);
//console.log(JsUser.email);
//console.log(JsUser[mySym]);

JsUser.email = "aman@chatgpt.com"
//console.log(JsUser.email);

//Object.freeze(JsUser)
JsUser.email = "aman@microsoft.com"
//console.log(JsUser.email);
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
}
JsUser.greetingTwo = function(){
    console.log(`hello,${this.name}`);
    


}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
