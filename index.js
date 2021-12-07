/////console tool////////



// console.log("hello");
//
// console.log(23);
// console.log(true);


// console.log([1,2,3,4]);
// console.log({a:1,b:3,c:3,d:4});
//
// console.table([1,2,3,4]);
// console.table({a:1,b:3,c:3,d:4});
//
// console.error("I am an error");
// console.warn("I am a warnig");
//
// console.clear();
//
// console.time("hello");
// console.log("test");
// console.log("test");
// console.log("test");
// console.log("test");
// console.log("test");
// console.log("test");
// console.timeEnd("hello");
//
// ///////////Variables
//
// let a=60;
// a=400;

// console.log(a);
// console.log(a);
// //
// var massage="hello";
// console.log(massage);

// a="sdfsfsdf"
// console.log(a);


// variables'name:  letter $ _   number
// // camel case:   firstName
// // pascal case:  FirstName

// var firstName;
// console.log(firstName);

// var welcomeMessage="welcome to my site";
// // console.log(welcomeMessage);
//
//
//
//
////////--Functions////////////////
//

// massage2();


// Function Declarations
// function massage2(){
//     console.log("hello");
    
// }
//


// //
// //
// msg();

// // // Function Expressions
// const msg = function(){
//     console.log("welcome")
// }


// //
// //
// Named Function Expressions
// var Massage=function (){
//     console.log("Hello Welcome")
// };
// Massage();
// /comparison/ which better/////////
// ;
// // hoisting

//
/////Arguments && Parameters/////////
//
// function sum(x,y){
//     console.log(y);
//     return x+y;
// }
// // //
// console.log(sum(67,7));
//
//
// function sum(x){
//     return x+1;
// }
// const sum = (x) => x+1;




// const sum= function(x,y){
//    console.log(arguments);
//     return x+y;
// }






// const sum=(x,y) => {return x+y;}

// const sum=(x,y) =>  x+y;

// const sum=()=>console.log("salam");




// if(sdsaf) console.log(sdsf);




// // //
// console.log(sum(67,7,90));

// function sum2(){
//     console.log(arguments);

//     let total=0;
//     for(const i of arguments){
//         total=total+i;
//     }
//     return total;
// }
//
// console.log(sum2(4,7,8,10,80));
// console.log(sum2(4,7,8));
// console.log(sum2(4,7,8,70,80,90,100));

//
// ////////////////Arrays/////////////
// console.log([1,2,3,4]);
//
// let number=[1,2,3,4];
// // //
// let names=['zahra','neda','arash'];
// // //
// let profile=['zahra',28,'isfahan',true,45.8];
// //
// // let numbers2=new Array(1,2,3,4);
// //
// //
// let numbers=[10,20,30];
// console.log(numbers);

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// //
// numbers[2]=60;
// console.log(numbers);
// numbers.indexOf(80);
// console.log(numbers.indexOf(80));
// // //
// // // console.log(numbers[2]);
// // // console.log(numbers.indexOf(60));
// //

// let numbers=[10,20,30];
// let numbers= new Array(10,20,30);
// numbers.length;
// console.log(numbers.length);
// // //
// numbers.push(40);
// // numbers.push(50);
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);

//
//
//
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
//
// numbers.shift();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
//
//
//
// // numbers.slice(1,2);
// // console.log(numbers);
//
// numbers.reverse();
// console.log(numbers);
// //
// // let numbers3=[70,80,90,100];
//
// // numbers.concat(numbers3);
// // console.log(numbers);
// // numbers.sort();
// // console.log(numbers);
//
// ////////////////objects/////////////
// console.log({a:1,b:3,c:3,d:4});
// let numbers=[10, 20,30];

// let num1=10;
// let num2=20;
// let num2=30;
// let profile=['zahra',28,'isfahan',true,45.8];
// let person={name:"zahra", age:28};

// key= "name";
// console.log(person.key);
// console.log(person[key]);


// console.log(person.age);
//
// const person={
//     firstName:"Neda",
//     lastName:"Yazdani",
//     age:28,
//     email:"n.yazdani623@gmail.com",
//     hobbies:['sports','music'],
//     address:{country:'Iran',city:['Isfahan','baharestan'],area:2},
//     getBirthdayYear: function() {return 1400-this.age}
    
// };

// console.log(person.hobbies[1]);
// console.log(person.address.city[1]);
// console.log(person.getBirthdayYear());

// person.address.city[1];
//
// console.log(person.getBirthdayYear);
// console.log(person.getBirthdayYear());
// console.log(person);
// console.log(person.firstName);
// // console.log(person['lastName']);
// console.log(person.age);
// //
// console.log(person.hobbies);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);
//

// console.log(person.address);
// console.log(person.address.country);
// console.log(person.address.city);
// console.log(person.address['area']);


///BOM ---> window
// window.console.log("salam");
// window.alert("hello")

//DOM
//single selector
// console.log(document.getElementById("welcome"));
// console.log(document.querySelector("#welcome"));
// console.log(document.querySelector(".div-test"));

//multi selector
// console.log(document.getElementsByClassName("div-test"));
// console.log(document.querySelectorAll(".div-test"));


// function setAlert(event) {
//     console.log(event.target.innerText);
//     // console.log(e.target.innerText);
//     alert("salam")
// }


// document.getElementById("btn-alert").addEventListener("click",function(event) {
//     console.log(event.target.innerText);
//     // alert("salam")
// }

// )


// document.getElementById("check-out-block").style.display="block";
// document.getElementById("btn-alert").innerText
// document.getElementById("input-1").value

// let products1= document.getElementsByClassName("add");
// let products2= document.querySelectorAll(".add");

// for (let i = 0; i < products2.length; i++) {
//     const element = products2[i];
//     console.log(products2[i]);
//     element.addEventListener("click",()=>{
//         console.log("salam");
//     }) 
// }

// products2.forEach((item, index) => {
//     console.log(item, index);
//     item.addEventListener("click",()=>{
//         console.log("salam");
//     })
// });

// let products3=[
//     {id:1, title:"title1"},
//     {id:2, title:"title2"},
//     {id:3, title:"title3"},
// ]

// products3.map(element => {
//     console.log(element);
//     // element.addEventListener("click",()=>{
//     //     console.log("salam");
//     // })
// });