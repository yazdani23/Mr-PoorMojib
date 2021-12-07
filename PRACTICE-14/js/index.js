// document.getElementById('top_header').style.background='red';

// function name(gojeh){
//     // doing...
//     return rob;
// }

// var a=20;
// console.log(a)


// function sum(x,y){
//     alert(x+y);
// }
// sum(2,3)

// console.log(a)

// function sum(x,y){
//    var c=x+y;
//    var  d=x-y

//    alert(c); 
//    return d;
// }

// var result= sum(7,2);

// result+1000;
//   let name="zahra"
//     let family="Yazdani"

    // alert(name+' '+family)


    // let a=20
    // let b=30
    // alert(a+b)
    // let num ="0"+"1"
    
// function sum(x,y){
//   return x+y
// }

// // arrow function
// const sum = (x,y) => {
//   return x+y
// }

// const sum = (x,y) => x+y


// /////////////////////
// const sum = x => x+1

// function sum(x){
//   return x+1
// }

// ///////////////////
// const display = () => console.log("hello");


//############ variables ###################

//  EcmaScript 5: var    EcmaScript 6: const, let

// var name="Zahra"
// name="Z"



 
// const username="yazdani45"
// username="yazdani23"

// let password="1234"
// password="12345"

// console.log(password);
// console.log(username);



//########## conditional statement################

// let n=3;

// //if else

// // if(n==2){
// //     console.log("The number is 2");
// // }

// let a=3
// if(a==2){
//   console.log("num is two");
// }else{
//   console.log("num isnot two");
// }

// if(n===2){
//     console.log("The number is 2!!!");
// }else{
//   console.log("The number isn't 2!!!");  
// }

// if(n==2){
//     console.log("The number is 2!!!");
//     console.log("evry thing is okay!!!");
//     alert("hello")
// }

// if(n==4){
//     console.log("The number is 4!!!");
// }

// if(n==5){
//     console.log("The number is 5!!!");
// }


// if(n==2){
//     console.log("The number is 2!!!");
// }
// else if(n==4){
//     console.log("The number is 4!!!");
// }
// else if(n==5){
//     console.log("The number is 5!!!");
// }else{
//     console.log("I don't know!!!");
// }


// //switch case

// switch(n) {
//     case 2:
//         console.log("The number is 2!!!");
//         break;
//     case 4:
//         console.log("The number is 4!!!");
//         break;
//     case 5:
//         console.log("The number is 5!!!");
//         break;

//     default:
//         console.log("I don't know!!!");
//   }

  


// short if  ===> if else

// n==2 ? console.log("The number is 2!!!") : console.log("The number isn't 2!!!")



// ############# loop #################

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// i++
// i--
// ++i
// --i
// for(let i=1; i<=10 ; i=i+1 ){
//     console.log(i);
// }


// while
// do while
// foreach
// filter
// find

// ########### arrays ############
// let number1=10
// let number2=20
// let number3=30
// let number4=40


// let numbers=[10,20,30,40]


// console.log(numbers);
// console.log(numbers[1]);

// let names=["zahra","Yazdani",30]


// ########### objects  ###############

// let profile={   name:"Zahra",
//                 family:"Yazdani",
//                 age:30,
//                 email:"z.yazdani23@gmail.com",
//                 fav:["music", "book"],
//                 address:{country:"Iran",city:"Isfahan"},
//                 yearOfBirth:function(){
//                     return 2021-this.age;
//                 }
// }

// console.log(profile)

// console.log(profile);
// console.log(profile.name);
// console.log(profile.fav);
// console.log(profile.fav[0]);
// console.log(profile.address);
// console.log(profile.address.country);
// console.log(profile.yearOfBirth);
// console.log(profile.yearOfBirth());


// ######## BOM ##########
// window.console.log("hello")
// window.alert("hello")

// let name=window.prompt()
// window.alert(name)

// let result=window.confirm("آیا مطمئن هستید؟")
// if(result==true){
// }else{
// }



// ########## DOM #############
// console.log( document.doctype);

// console.log(document.images[1]); 

// ########## single selectors

// console.log(document.getElementById('logo'))
// console.log(document.querySelector('#logo span'));
// console.log(document.querySelector('.lang-group'));
// document.querySelector('#logo span').innerText='.fr'
// document.querySelector('#logo span').textContent='.fa'
// document.querySelector('.item1').src="../images/make_up.jpeg"
// document.querySelector('#logo span').style.background="red"

// ############# multi selectors

// console.log(document.getElementsByClassName('lang-group'));
// console.log(document.querySelectorAll('.lang-group'));


// function addToCart(){
    // let number= parseInt( document.getElementById('num-product').innerText )
    // document.getElementById('num-product').innerText=number+1

  
// }

let total_price=0 
function increaseNumber(){
  let number=document.getElementById('num-product').innerText
  document.getElementById('num-product').innerText=++number
}

function addToCart(event){
 
  increaseNumber()

  let p_empty=document.querySelector('#list-cart p').style.display="none"
  let checkOut=document.querySelector('#proceed').style.display="block"
  
  let id_p=event.target.id
  
  let item=event.target.parentElement.parentElement
  let price_p= parseFloat(item.querySelector('.price').innerText) 
  // total_price = total_price + price_p
  total_price += price_p  

  let total_p=document.getElementById('total_p').innerText="$"+total_price

  // total_p=document.getElementById('total_p').innerText="$"+total_peice???


  if( document.getElementById( id_p + "number" ) == null){ 
      
    let img_p= item.querySelector('img').src
    let title_p= item.querySelector('.title').innerText
    let price_p= item.querySelector('.price').innerText

    let li_c= document.createElement('li')
    li_c.setAttribute('class','item-cart')
    
    let img_c= document.createElement('img')
    img_c.setAttribute('src',img_p)

    let div_c= document.createElement('div')
    div_c.className="div_c"
    // div_c.style.color="black"

    let title_c= document.createElement('div')
    title_c.innerText= title_p
    
    let price_c= document.createElement('span')
    price_c.innerText="$"+price_p

    let number_c= document.createElement('span')
    number_c.id= id_p+"number"
    number_c.className="number_c"  
    number_c.innerText= "1"
  
    div_c.appendChild(title_c)
    div_c.appendChild(price_c)
    div_c.appendChild(number_c)


    let i_c= document.createElement('i')
    i_c.setAttribute('class','fas fa-window-close')
    i_c.addEventListener('click',function(){
      let submit= confirm("آیا مطمئن هستید به حذف؟")

      if(submit==true){
        let parentDeleteIcon=i_c.parentElement
        let numberOfPro=parentDeleteIcon.querySelector('.number_c').innerText;

        let priceText=parentDeleteIcon.querySelector('span').innerText;
        let priceOfPro=priceText.slice(1,priceText.length)

        let totalText= document.getElementById('total_p').innerText
        

        let totalPrice=totalText.slice(1,totalText.length)

        let priceOfItem=numberOfPro*priceOfPro
        
        document.getElementById('total_p').innerText ="$"+(totalPrice-priceOfItem)

        let number=document.getElementById('num-product').innerText
        number=number-numberOfPro
        document.getElementById('num-product').innerText=number

        parentDeleteIcon.remove()

        if(document.getElementById('list-ul').childElementCount==0){
          document.querySelector('#list-cart p').style.display='block'
          document.querySelector('#list-cart div').style.display='none'
        }
      }
      else{
        
      }

    })
    li_c.appendChild(img_c)
    li_c.appendChild(div_c)
    li_c.appendChild(i_c)

    document.getElementById('list-ul').appendChild(li_c)
  }
  else{
      let number_cart=document.getElementById( id_p + "number" ).innerText
      document.getElementById(id_p+"number").innerText= ++number_cart
  }
  
  
}

// document.getElementById('shoes').addEventListener('click',function(){
//   alert("hello!")
// })

    
  





