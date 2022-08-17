const course = document.getElementById("selected-course");
const spot = document.getElementById("selected-spot");

const url = window.location.href;
console.log(url);

if (url.includes("blog")) {
  course.style.fontWeight = "bold";
}

if (url.includes("spot")) {
  spot.style.fontWeight = "bold";
}
