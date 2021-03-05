const boxes = document.querySelectorAll(".faq-box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    //boxes.clasList.forEach((box) => box.classList.remove("active"));
    box.classList.toggle("active");
  });
});
