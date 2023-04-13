const imageWrapper = document.querySelector(".image-wrapper");
const img = document.querySelectorAll("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const indexNumber = document.querySelector(".index-number");

let currentIndex = 0;

function nextImage() {
  prev.removeAttribute("disabled");

  if (currentIndex + 1 === img.length - 1) {
    next.setAttribute("disabled", "");
    console.log("done");
  }

  currentIndex++;
  img[currentIndex].classList.add("active");
  img[currentIndex - 1].classList.remove("active");
  indexNumber.innerHTML = currentIndex + 1;
}

function prevImage() {
  if (currentIndex === 1) {
    prev.setAttribute("disabled", "");
    next.removeAttribute("disabled");
  }
  img[currentIndex].classList.remove("active");
  currentIndex--;
  img[currentIndex].classList.add("active");
  indexNumber.innerHTML = currentIndex + 1;
}

for (let i = currentIndex; i < img.length; i++) {
  if (currentIndex === 0) {
    prev.setAttribute("disabled", "");
  }
  img[currentIndex].classList.add("active");
}
