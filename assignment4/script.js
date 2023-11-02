// hide navbar while scrolling down
// and show it while scrolling up
// and on top of the page
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "#333";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }

  if (currentScrollPos === 0) {
    document.getElementById("navbar").style.background = "transparent";
  }
  prevScrollpos = currentScrollPos;
};

//add active class to navbar links that give it red color
//when scrolling to the div with same id in href of that link
const sections = document.querySelectorAll("div[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
