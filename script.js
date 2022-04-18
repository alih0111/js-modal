const showBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-modal");
const confirmBtn = document.querySelector(".confirm-modal");

showBtn.addEventListener("click", () => {
  modal.style.transform = "translateY(20vh)";
  modal.style.opacity = "1";
  backdrop.style.display = "block";
});

// closemodal = () => {
//   modal.style.transform = "translateY(-100vh)";
//   modal.style.opacity = "0";
//   backdrop.style.display = "none";
//   return true;
// };
closeBtn.addEventListener("click", closemodal);
backdrop.addEventListener("click", closemodal);

function closemodal() {
  modal.style.transform = "translateY(-100vh)";
  modal.style.opacity = "0";
  backdrop.style.display = "none";
}
