// console.log("hello world");

//var firstname = "prajyot nimje";
//console.log(firstname);



//map method////

//const numbers=[1,2,3,4,5];
//const newvalues= numbers.map((num)=>{
//  return num;
//})
//console.log(newvalues);



///filter method//////

//const numbers=[1,2,3,4,5,6,7,8,9,10];
//const iseven=numbers.filter((num)=>{
//  return num%2!==0;
//})
//console.log(iseven);



///reduce method////

//const numbers=[1,2,3,4,5,6,7,8,9,10];
//const sum=numbers.reduce((accumulator,currentvalue)=>
//{
//  return accumulator+currentvalue;
//},100)
//console.log(sum)


//const usermethod = {
//about: function () {
//return `My name is ${this.firstname} and my age is ${this.age}`;
//},
//is18: function () {
//return this.age >= 18;
//}
//}
//function createUser(firstname, lastname, email, age, city,) {
//const user = {}
//user.firstname = firstname;
//user.lastname = lastname;
//user.email = email;
//user.age = age;
//user.city = city;
//user.about = usermethod.about;
//user.is18 = usermethod.is18;
//return user;
//}
//const user = createUser("prajyot", "nimje", "sgvsr@gmail.com", 22, "nagpur")
//console.log(user.about());


// const obj1={
//   key1:"value1",
//   key2:"value2"
// }

// const obj2= Object.create(obj1);
// obj2.key3="value3";
// console.log(obj2)

// hello.prototype.myname = "Prajyot";
// hello.prototype.obj = {
//   firstname: "Prajyot",
//   lastname: "Nimje",
//   age: 22,
//   city: "Nagpur",
// }
// hello.prototype.userinfo = function () {
//   return "my name is is ${this.firstname} and age is"
// }

// function createUser(firstname,lastname,email,age,city){
//   this.firstname=firstname;
//   this.lastname=lastname;
//   this.email = email;
//   this.age = age;
//   this.city = city;
// }
// createUser.prototype.about= function(){
//   return `My name is ${this.firstname} and my age is ${this.age}`;
// }
// createUser.prototype.is18= function(){
//   return this.age>=18;
// }
// createUser.prototype.even= function(){
//   return this.age%2==0;
// }
// const user1 = new createUser("prajyot", "nimje", "sgvsr@gmail.com", 22, "nagpur")
 
// console.log(user1.about);

// for(let key in user1){
//   if(user1.hasOwnProperty(key)){
//     console.log(key);
//   }
// }


// class Animal{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   cute(){
//     return `${this.name} is cute`;
//   }
//   iseat(){
//     return`${this.name} is eating`;
//   }
// }
// class dog extends Animal{
//   constructor(name,age,speed){
//     super(name,age)
//     this.speed=speed;
//   }
//   run(){
//     return`${this.name}is running at ${this.speed} kmph`;
//   }
// }
// const tom = new dog("tom",1,50);
// console.log(tom);



//dom 
const rootnode = document.getRootNode();
const htmlElementNode = rootnode.childNodes[0];
const headNode= htmlElementNode.childNodes[0];
const textNode= htmlElementNode.childNodes[1];
const body= htmlElementNode.childNodes[2];
console.log(headNode);
console.log(textNode);
console.log(body);

// console.log(htmlElementNode.childNodes);