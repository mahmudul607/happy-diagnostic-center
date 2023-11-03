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
           items:2
       },
       1000:{
           items:2
       }
   }
})


// panne code
function responsive(){
  if(jQuery(window).width() >= 992){
    $(".slider").slick({
    
      slidesToShow: 4,
     slidesToScroll: 4,
     arrows: true,
     
    
   });
0  }
  else if (jQuery(window).width() >= 768){
    $(".slider").slick({
    
      slidesToShow: 2,
     slidesToScroll: 2,
     arrows: true,
     
    
   });
  }
  else if (jQuery(window).width() >= 576){
    $(".slider").slick({
    
      slidesToShow: 2,
     slidesToScroll: 2,
     arrows: true,
     
    
   });
  }
  else if(jQuery(window).width() < 576){
    $(".slider").slick({
    
    slidesToShow: 1,
    slidesToScroll: 1,
     arrows: true,
     
    
   });
  }
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


// Remove it then Start coding for new work


// $('.counter').counterUp({
//    delay: 10,
//    time: 1300
//  });
//  $('.counter').addClass('animated fadeInDownBig');
//  $('h3').addClass('animated fadeIn');

const counters = document.getElementsByClassName('counter');

let inc = [];
function interval(){

  for(let i = 0; i < counters.length; i++) {
    inc.push(1);

    if(inc[i] != counters[i].getAttribute('max-data')){
      inc[i]++;
    }
    counters[i].innerHTML = inc[i];
  }

}

// setInterval(interval, 50);


let main = document.getElementById('quality-section');
window.onscroll = function(){
    let timer = setInterval(() =>{
        let topElem = main.offsetTop;
        let btmElem = main.offsetTop + main.clientHeight;
        let topScreen = window.pageYOffset;
        let btmScreen = window.pageYOffset + window.innerHeight;
        if (btmScreen > topElem && topScreen < btmElem){
            interval();
        }
        else{
            clearInterval(timer);
            for(let i=0; i<counters.length; i++){
                // count[i].innerHTML = 1;
                inc = [];
            }
        }
    }, 200)
    

}


// google map

// Initialize and add the map
let map;

async function initMap(map) {
  // The location of Uluru
  const position = { lat: 23.874138298503535, lng: 90.39282216907367 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "330cd246d4b8c715",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Dhaka",
  });
}

initMap(map);


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


