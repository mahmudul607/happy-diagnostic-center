let element = document.getElementById('tb_Header');
element.addEventListener('click', (e)=>{
  let elems = document.querySelector('.active');

  if(elems != null){
    elems.classList.remove('active');
  }
 
  e.target.className = 'active';
 

});





// Owl Carousel

$(document).ready(function(){
   $(".owl-carousel").owlCarousel();
 });

 $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
  
 
  
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:3
       }
   }
})


// panne code
function responsive(){
  if(jQuery(window).width() > 1000){
    $(".slider").slick({
    
      slidesToShow: 4,
     slidesToScroll: 4,
     arrows: true,
     
    
   });
  }
  else if (jQuery(window).width() > 600){
    $(".slider").slick({
    
      slidesToShow: 2,
     slidesToScroll: 2,
     arrows: true,
     
    
   });
  }
  else if (jQuery(window).width() > 400){
    $(".slider").slick({
    
      slidesToShow: 2,
     slidesToScroll: 2,
     arrows: true,
     
    
   });
  }
  // else if(jQuery(window).width() < 400){
  //   $(".slider").slick({
    
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //    arrows: true,
     
    
  //  });
  // }
}

$(function() {
 
  responsive();
 
   
   $(".filter li").on('click', function(){
     var filter = $(this).data('filter');
     $(".slider").slick('slickUnfilter');
     
     if(filter == 'cardiology'){
       $(".slider").slick('slickFilter','.cardiology' );
       
     }
     else if(filter == 'neurosurgery'){
       $(".slider").slick('slickFilter','.neurosurgery');
     }
     else if(filter == 'surgery'){
       $(".slider").slick('slickFilter','.surgery');
     }
     else if(filter == 'urology'){
       $(".slider").slick('slickFilter','.urology');
     }
     else if(filter == 'all'){
       
       $(".slider").slick('slickUnfilter');
     }
     
   })
   
 });
 

//  end owl carousel




// remove it before start new work

const checkClicked = document.querySelector(".btn").addEventListener('click', () => {
   console.log('clicked me');
})
// Remove it then Start coding for new work


$('.counter').counterUp({
   delay: 10,
   time: 1300
 });
 $('.counter').addClass('animated fadeInDownBig');
 $('h3').addClass('animated fadeIn');



//  circle ==========================================================================
// let number = document.getElementById('number1');
// let amount = parseFloat(number.innerText);
// let= counter = 0;

//  setInterval(() =>{
   
//    if (counter == amount){
//       clearInterval;
//    }
//    else{
//       counter += 1;
//    number.innerHTML = `${counter}%`;
//    }
   
//  },15)

// let number1 = document.getElementById('number2');
// let amount1 = parseFloat(number1.innerText);
// let= counter1 = 0;

//  setInterval(() =>{
   
//    if (counter1 == amount1){
//       clearInterval;
//    }
//    else{
//       counter1 += 1;
//    number1.innerHTML = `${counter1}%`;
//    }
   
//  },15)
// let number2 = document.getElementById('number3');
// let amount2 = parseFloat(number2.innerText);
// let= counter2 = 0;

//  setInterval(() =>{
   
//    if (counter2 == amount2){
//       clearInterval;
//    }
//    else{
//       counter2 += 1;
//    number2.innerHTML = `${counter2}%`;
//    }
   
//  },15)

function roundCircleCounter(id, amount, counter2){
   let number2 = document.getElementById(id);
   
let= counter2 = 0;
 setInterval(() =>{
   

   
   if (counter2 == amount){
      clearInterval;
   }
   else{
      counter2 += 1;
   number2.innerHTML = `${counter2}%`;
   }
   
 },15)

}

roundCircleCounter('number1', 65);
roundCircleCounter('number2', 75);
roundCircleCounter('number3', 85);



// .Circle 

