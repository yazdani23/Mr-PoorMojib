// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// setInterval(()=>{
    
// }, interval);


// callback function  ---> parameter
// setInterval(function(){
//     // $('#top_header').css('background','red')
//     let number=parseInt($('#num-product').text())
//     $('#num-product').text(++number)
// },3000)



let index=0
slidShow()
// setInterval(() => {
//     console.log(index);
//     slidShow()
// }, 3000);

function slidShow(){

    let slides= $('.img-slider')
    slides.hide()

    index++;
    if(index >= slides.lenght-1) {
        console.log("hello");
        index=1;
    }   
    
    slides[index-1].style.display="block"
    
    setTimeout(()=>{
        console.log(index);
        slidShow()
    }, 3000);
    //slides[index].show();
    
    
    // console.log(slides1);
    // console.log(slides2);

    // slides1.css('width','80%')

    // slides2.style.width="80%"

    // var slides = document.getElementsByClassName("img-slider");
    // console.log(slides);
    // for(let i=0; i< slides.lenght; i++){
    //     console.log(slides[i]);
    //     slides[i].style.display="none"
    // }
}