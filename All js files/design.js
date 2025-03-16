
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function updateDateTime() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();



function showAlert() {
  alert("Friendly Reminder\n\nThe designs you see here are the heart and soul of our creative agency. We kindly ask that you don’t copy or use them without our permission. Your respect for our work means the world to us! Thank you!");
}
window.onload = function() {
  showAlert();
};

document.getElementById("yourButtonId").addEventListener("click", showAlert);

