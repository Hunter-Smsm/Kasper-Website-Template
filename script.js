const landingSpanLeft = document.querySelector(".landing span.left");
const landingSpanRight = document.querySelector(".landing span.right");
const landingDots = document.querySelectorAll(".landing .dots span");
const imagesContainer = document.querySelector(".landing .images");

let index = 0;

landingSpanRight.addEventListener("click", () => {
	landingDots[index].classList.remove("active");
	if (index === 2) {
		index = 0;
	} else {
		index++;
	}
	landingDots[index].classList.add("active");
	imagesContainer.style.left = `-${index * 100}vw`;
	console.log(index);
});

landingSpanLeft.addEventListener("click", () => {
  landingDots[index].classList.remove("active");
	if (index === 0) {
    index = 2;
	} else {
    index--;
	}
	landingDots[index].classList.add("active");
	imagesContainer.style.left = `-${index * 100}vw`;
  console.log(index);
});
