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
