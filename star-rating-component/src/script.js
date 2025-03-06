const stars = document.querySelectorAll(".star");
const feedbackMessage = document.querySelector(".feedback-message");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s) => s.classList.remove("active"));
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("active");
    }
    feedbackMessage.style.display = "block";
  });
});
