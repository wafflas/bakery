
//krupse mpara
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }







// slideshow
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(function() { plusSlides(1); }, 8000); // Αυτόματη προχώρηση σε επόμενη φωτογραφία κάθε 8 δευτερόλεπτα
} 



/* ----reviews---- */

var slideIndexRev = 1;
var timerRev = null;
showSlidesRev(slideIndexRev);

function plusSlidesRev(n) {
  showSlidesRev(slideIndexRev += n);
}

function currentSlideRev(n) {
  showSlidesRev(slideIndexRev = n);
}

function showSlidesRev(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-reviews");
  var dots = document.getElementsByClassName("dot-reviews");
  if (n > slides.length) {slideIndexRev = 1}
    if (n < 1) {slideIndexRev = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndexRev-1].style.display = "block";
  dots[slideIndexRev-1].className += " active";
  timerRev = setTimeout(function() { plusSlidesRev(1); }, 8000); // Αυτόματη προχώρηση σε επόμενη φωτογραφία κάθε 8 δευτερόλεπτα
} 


 

document.addEventListener("DOMContentLoaded", function() {
  var logoPopup = document.querySelector(".logo-popup")
  var slides = document.querySelectorAll(".mySlides")
  slides.forEach(function(slide) {
      logoPopup.style.display = "block"
  })
})



/*---------Email script--------*/

function sendMail() {
  var params = {
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_o1py7lt";
  const templateID = "template_fxle5we";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!");

    })
    .catch(err=>console.log(err));

}