const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const closeButton = document.getElementById("closeButton");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

closeButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});

function redirectToBookingPage() {
  window.location.href = "pages/booking.html";
}

$(document).ready(function() {
  // Sembunyikan dropdown secara default
  $('.dropdown .menu').hide();
  
  // Ketika tombol Profile di-klik
  $('.profile-link').click(function(event) {
      event.preventDefault(); // Mencegah aksi bawaan dari link
      event.stopPropagation();
      var dropdownMenu = $(this).next('.menu');
      
      // Toggle tampilan dropdown
      dropdownMenu.toggle();
      
      // Sembunyikan dropdown lain jika ada
      $('.dropdown .menu').not(dropdownMenu).hide();
  });
  
  // Sembunyikan dropdown saat klik di luar dropdown
  $(document).click(function(event) {
      if (!$(event.target).closest('.dropdown').length) {
          $('.dropdown .menu').hide();
      }
  });
});
