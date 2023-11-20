document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");
  var scrolledNav = document.getElementById("navbar");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.classList.add("visible");
      scrolledNav.classList.add("scrolled");
    } else {
      backToTopButton.classList.remove("visible");
      scrolledNav.classList.remove("scrolled");
    }
  };

  // Scroll to the top when the button is clicked
  backToTopButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});
