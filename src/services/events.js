// Create notes functionality
const createNote = (e, color) => {
  const formContainer = e.closest(".notes__form");
  const notesHtmlList = [];
  let noteTitle = formContainer.querySelector("textarea");
  // check if value is empty note save note
  if (!noteTitle.value) {
    return;
  }

  const note = {
    id: Date.now(),
    note: noteTitle.value,
    color: color,
    created_at: Date.now(),
  };

  notes.push(note);
  noteTitle.value = "";

  // getting html notes for rendering
  notes.forEach((note) => {
    const NoteInstance = new Note({
      dom: clonedNote.cloneNode(true),
      data: note,
      listeners: { onClick: openEditModal },
    });
    notesHtmlList.push(NoteInstance.$el);
  });

  const render = new Render({
    dom: noteList,
    data: notesHtmlList,
  });
  render.render();

  // hide color picker component
  formContainer.classList.remove("show");
};

// Filter notes functionality
const filterNotes = (e) => {
  e.preventDefault();
  alert(`Filter item ${e.target.innerText}`);
};

const openEditModal = (note) => {
  console.log(note);
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
      if (e.target.closest(".notes__form").classList.contains("show")) {
        e.target.closest(".notes__form").classList.remove("show");
      }
    }, 100);
  });
});
