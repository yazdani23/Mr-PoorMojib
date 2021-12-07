// function addNumber(){
//     let number = document.getElementById('num-product').innerText
//     document.getElementById('num-product').innerText = ++number
// }


// string  "hello " + "Zahra"
// number   3 + 2  = 5

// string + number   "hello " + 5  => string  "hello 5"

// string + number   "0" + 1 =  "01"

document.querySelectorAll('.add').forEach( item => {
        item.addEventListener('click', (event)=>{

            let titleP= event.target.parentElement.parentNode.querySelector(".title").innerText
            let imgP= event.target.parentElement.parentNode.querySelector("img").src
            let priceP= event.target.parentElement.parentNode.querySelector(".price").textContent
            let idP= event.target.id
            

            let number = document.getElementById('num-product').innerText
            document.getElementById('num-product').innerText = ++number

            document.querySelector('#list-cart p').style.display="none"
            document.querySelector('#check-out-block').style.display="block"
            // console.log(`cart${idP}`);

            if(document.getElementById('cart'+idP)){
                let numberCart=document.getElementById('cart'+idP).innerText
                document.getElementById('cart'+idP).innerText= ++numberCart
            }
            else{
                let itemCart= `
                        <li class="item-cart">
                            <div>${titleP}</div>
                            <span>$ ${priceP}</span>
                            <img src="${imgP}">
                            <span id="cart${idP}" class="number_c">1</span>
                            <i class="fas fa-window-close delete-product"></i>
                        </li>
                `
                // document.querySelector('.delete-product').addEventListener('click',(e)=>{
                //     console.log( e.target);
                //  })
                let deleteIcon=document.getElementById('cart'+idP).parentElement.querySelector('.delete-product')
                deleteIcon.addEventListener('click',(e)=>{
                     console.log(e.target);
                })


                let listUl=document.querySelector('#list-ul').innerHTML
                listUl += itemCart //listUl = listUl + itemCart
                document.querySelector('#list-ul').innerHTML=listUl
            }
        })
})

// console.log(document.querySelectorAll('.delete-product'));



// function addEventDelete(element){
//         element.addEventListener('click',(e)=>{
//            console.log( e.target);
//         })
// }

// document.querySelectorAll('.add').forEach(  function(item){
//     item.addEventListener('click',   function(){

//     })
// }

// console.log(document.querySelectorAll('.add'));
// document.getElementById('p1').addEventListener('click',function(){

//     let number = document.getElementById('num-product').innerText
//     document.getElementById('num-product').innerText = ++number

// })