Fancybox.bind("[data-fancybox]"),
  {

  };

const openModalBtn = document.querySelectorAll("[data-action='modal']");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelectorAll("#closeModal");
const modalBody = document.querySelectorAll(".modal__body");

openModalBtn.forEach((item)=>{
item.addEventListener('click', ()=>{
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
})
})

openModalBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.remove("modal--open");
    document.body.classList.remove("no-scroll");
  });
});


modal.addEventListener("click", ()=>{
 modal.classList.remove("modal--open");
 document.body.classList.remove("no-scroll");
});

openModalBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

