// Create notes functionality
const createNote = (e) => {
  e.preventDefault();
  e.target.closest(".notes__form").classList.remove("show");
  console.log("Create note");
};

// Filter notes functionality
const filterNotes = (e) => {
  e.preventDefault();
  alert(`Filter item ${e.target.innerText}`);
};

// Open and Close drawer
const drawer = document.querySelector(".drawer");
document.querySelector(".burger__menu").onclick = (e) => {
  e.preventDefault();
  setTimeout(() => {
    if (!drawer.classList.contains("show")) {
      drawer.classList.add("show");
    }
  }, 0);
};
document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".drawer");
  if (!isClosest && drawer.classList.contains("show")) {
    drawer.classList.remove("show");
  }
});

// Show ColorPicker component
[...document.querySelectorAll("form textarea")].map((textarea) => {
  textarea.addEventListener("focus", (e) => {
    e.preventDefault();
    e.target.closest(".notes__form").classList.add("show");
  });
  textarea.addEventListener("blur", (e) => {
    e.preventDefault();
    setTimeout(() => {
      if(e.target.closest(".notes__form").classList.contains('show')) {
        e.target.closest(".notes__form").classList.remove("show");
      }
    }, 100)
  });
});
