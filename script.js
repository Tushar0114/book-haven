const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  const modal = document.getElementById("bookModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".book-card").forEach(card => {
  card.addEventListener("click", () => {
    modalImg.src = card.dataset.img;
    modalTitle.innerText = card.dataset.title;
    modalDesc.innerText = card.dataset.desc;

    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};
});