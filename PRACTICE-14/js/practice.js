


let  total_price=0

function increaseNumber() {

  let number=document.getElementById('num-product').innerText
  document.getElementById('num-product').innerText=++number 
}


function addToCart(event){

    increaseNumber()
    
    let p_empty=document.querySelector('#list-cart  p').style.display="none"
    let checkOut=document.getElementById('proceed').style.display="block"
   

   let id_p=event.target.id

   let item=event.target.parentElement.parentElement

   let price_p =parseFloat(item.querySelector('.price').innerText)
  
   total_price += price_p

   let total_p=document.getElementById('total_p').innerText

   total_p =document.getElementById('total_p').innerText="$"+total_price
       
   
if(document.getElementById(id_p + "number") == null){

  let img_p = item.querySelector('img').src
  let title_p = item.querySelector('.title').innerText
  let price_p = item.querySelector('.price').innerText


  let li_c= document.createElement('li')
  li_c.setAttribute('class','item-cart')


  let img_c= document.createElement('img')
  img_c.setAttribute('src',img_p)


  let div_c=document.createElement('div')
  div_c.className="div_c"


  let title_c=document.createElement('div')
  title_c.innerText=title_p

  let price_c=document.createElement('span')
  price_c.innerText="$"+price_p

  let number_c=document.createElement('span')
  number_c.id=id_p+"number"
  number_c.className="number_c"
  number_c.innerText="1"

    div_c.appendChild(title_c)
    div_c.appendChild(price_c)
    div_c.appendChild(number_c)


  let i_c= document.createElement('i')
  i_c.setAttribute('class','fas fa-window-close') 
  i_c.addEventListener('click',function(){

    let submit=confirm("r u sure to delete?")

    if(submit==true){

      let parentDeleteIcon=i_c.parentElement
      let numberOfPro=parentDeleteIcon.querySelector('.number_c').innerText;

      let priceText=parentDeleteIcon.querySelector('span').innerText
      let priceOfPro=priceText.slice(1,priceText.length)


      let totalText=document.getElementById('total_p').innerText

      let totalPrice=totalText.slice(1,totalText.length)

      let priceOfItem=numberOfPro*priceOfPro


      document.getElementById('total_p').innerText="$"+(totalPrice-priceOfItem)
     
      let number=document.getElementById('num-product').innerText

       number=number-numberOfPro

       document.getElementById('num_product').innerText=number

      parentDeleteIcon.remove()

      if(document.getElementById('list-ul').childElementCount==0){

        document.querySelector('#list-cart p').style.display='block'
        document.querySelector('#list-cart div').style.display='none'

      }

    }

    else{

    }
  }
  )
  li_c.appendChild(img_c)
  li_c.appendChild(div_c)
  li_c.appendChild(i_c)
   
  document.getElementById('list-ul').appendChild(li_c)
}

else{

  let number_cart=document.getElementById(id_p +"number").innerText  
  document.getElementById(id_p+"number").innerText = ++number_cart  

}

}

 

// function item(){


// }


// document.getElementById('top-header').style.background='red'


// let  item=document.querySelector('.product').textContent


// function F(x,y){
  
//   let Z=x+y

// }



// function sum(x,y){

//   alert(x+y);
// }

// sum(2,3)


// function sum(x,y){

//   var c=x+y;         
//   var d=x-y; 


//   alert(c);
//   return (d);
// }

// sum(2,3)


// var result=sum(2,5);


// var b=result+1000;


// var name="sara";

// name="zahra"


// var name="sara";
// var surname="davoodi";


// alert(name+ ' ' + surname);


// let a=2
// let b=3

// alert(a+b)


// let num="1"+"2"

// const pass=1234
// pass=12345

// console.log(pass)

// let username="sara"
// username="s"
// console.log(username)

// let a="sara."

// if (a=="sara"){

//   console.log(a);

// }

// else{
// console.log("s");
// }

// let num="2"

// if(num===2){

//   console.log("num is 2");

// }

// else{
//   console.log("num is not 2")
//   alert("hello")
// }

// let n=4

// switch (n) {

//   case 2:
//   console.log("num is 2!");
//   break;

//   case 3:
//   console.log("num is 3!");
//   break;

//   case 4:
//   console.log("num is 4!");
//   break;

//   default:
//     console.log("hello");

// }

// 
// ################### short if   / if else ###################



// let n="2"

// n==2 ?  console.log("num is 2") : console.log('num is not 2')


// ############# loop #################

// for (let i=1 ; i<=10;  ++i){
   
//   console.log(i);

// }


// ########### arrays ############

// let num=1
// let num=2
// let num=3
// let num=4

// let numbers=[1,2,3,4,]

// console.log(numbers)
// console.log(numbers[0])


// let profile=["sara", "davoodi",30]

// console.log(profile)


// ########### objects  ###############

// let profile={ name:"sara",
//               surname:"davoodi",
//               age:35,
//               favorites:["book","music","yoga"],
//               address:{city:"tehran", country:"iran", number:18},
//               yearOfBirth:function(){

//               return 2021-this.age;  }

// }

// // console.log(profile)

// console.log(profile.name)
// console.log(profile.favorites[0])
// console.log(profile.yearOfBirth())


// console.log
// alert()

// let name=window.confirm("r u sure?")

// let name=prompt("r u sure?")

// if (true){

//   alert("hello")

// }

// ########## single selectors

// console.log(document.getElementById('logo'))
// console.log(document.querySelector('#logo'))
// console.log(document.getElementById('num-product').innerText)
// document.getElementById('logo').style.background="red"
// document.querySelector('#top_header').style.background="red"
// // document.querySelector('.item img').style.background="red"
// document.querySelector('#logo span').innerText="fr"

// ############# multi selectors

// console.log(document.getElementsByClassName('item'))
// console.log(document.querySelectorAll('.item'))