// const { model } = require("mongoose");


//EXTENSIVE NAV
const navBars = document.querySelector(".nav-bars");
const navPages = document.querySelector(".nav-pages");

navBars.addEventListener('click',()=>{
  navPages.classList.toggle('active');
  console.log(navBars.firstChild.classList);
  if (navPages.classList == 'nav-pages active'){
    navBars.firstChild.classList.replace("fa-bars","fa-times");
  }
  else{
    navBars.firstChild.classList.replace("fa-times","fa-bars");
  }
  
})




// GALLERY
// const modalImg = document.querySelector(".image");
// const modalContainer = document.querySelector(".modal-container");
// const modalExitButton = document.querySelector(".modal-exit-button");

// modalImg.addEventListener('click',()=>{
//     modalContainer.parentNode.classList.add('active');
// })

// modalExitButton.addEventListener('click',()=>{
//   modalContainer.parentNode.classList.remove('active');
// })



//STAR RATING

document.getElementById("stars-saltos").innerHTML = getStars(2);
document.getElementById("stars-concurrencia").innerHTML = getStars(3.5);
document.getElementById("stars-caudal").innerHTML = getStars(4);
document.getElementById("stars-aparcamiento").innerHTML = getStars(4);

function getStars(rating) {

  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // If there is a half a star, append it
  if (i == .5) output.push('<i class="fa fa-star-half-alt" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // Fill the empty stars
  for (let i = (5 - rating); i >= 1; i--)
    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  return output.join('');

}










// get our elements
// const slider = document.querySelector('.slider-container'),
//   slides = Array.from(document.querySelectorAll('.slide'))

// // set up our state
// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID,
//   currentIndex = 0

// // add our event listeners
// slides.forEach((slide, index) => {
//   const slideImage = slide.querySelector('img')
//   // disable default image drag
//   slideImage.addEventListener('dragstart', (e) => e.preventDefault())
//   // touch events
//   slide.addEventListener('touchstart', touchStart(index))
//   slide.addEventListener('touchend', touchEnd)
//   slide.addEventListener('touchmove', touchMove)
//   // mouse events
//   slide.addEventListener('mousedown', touchStart(index))
//   slide.addEventListener('mouseup', touchEnd)
//   slide.addEventListener('mousemove', touchMove)
//   slide.addEventListener('mouseleave', touchEnd)
// })

// // make responsive to viewport changes
// window.addEventListener('resize', setPositionByIndex)

// // prevent menu popup on long press
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
// }

// // use a HOF so we have index in a closure
// function touchStart(index) {
//   return function (event) {
//     currentIndex = index
//     startPos = getPositionX(event)
//     isDragging = true
//     animationID = requestAnimationFrame(animation)
//     slider.classList.add('grabbing')
//   }
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos
//   }
// }

// function touchEnd() {
//   cancelAnimationFrame(animationID)
//   isDragging = false
//   const movedBy = currentTranslate - prevTranslate

//   // if moved enough negative then snap to next slide if there is one
//   if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

//   // if moved enough positive then snap to previous slide if there is one
//   if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

//   setPositionByIndex()

//   slider.classList.remove('grabbing')
// }

// function animation() {
//   setSliderPosition()
//   if (isDragging) requestAnimationFrame(animation)
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth //Introducir aqui tamaño de la imagen -window.innerWidth 
//   prevTranslate = currentTranslate
//   setSliderPosition()
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`
// }

// window.oncontextmenu = function () { 

 
//  }