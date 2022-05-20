// Create notes functionality
const createNote = (e, color) => {
  const formContainer = e.closest(".notes__form");
  let isUpdateForm = formContainer
    .querySelector("form")
    .getAttribute("data-update");
  let noteTitle = formContainer.querySelector("textarea");
  // check if value is empty note save note
  if (!noteTitle.value) {
    return;
  }
  if (isUpdateForm) {
    let noteId = formContainer.querySelector("form").getAttribute("data-id");

    notes.map((note) => {
      if (note.id == noteId) {
        note.note = noteTitle.value;
        note.color = color;
      }
    });
  } else {
    const note = {
      id: Date.now(),
      note: noteTitle.value,
      color: color,
      created_at: Date.now(),
    };

    notes.push(note);
    noteTitle.value = "";
  }

  renderNotes(notes);

  // hide color picker and modal components
  formContainer.classList.remove("show");
  modalContainer.classList.remove("show");
};

function renderNotes(notes) {
  const notesHtmlList = [];
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
}

// Filter notes functionality
const filterNotes = (e, data) => {
  e.preventDefault();

  if (data.color == "rgb(255, 255, 255)") {
    renderNotes(notes);
    drawer.classList.remove("show");
    return;
  }

  let filteredNotes = notes.filter((note) => note.color == data.color);
  renderNotes(filteredNotes);
  drawer.classList.remove("show");
};

const openEditModal = (note) => {
  modalContainer.querySelector("textarea").value = note.note;
  modalContainer.querySelector("form").setAttribute("data-id", note.id);
  modalContainer.querySelector("form").setAttribute("data-update", true);
  modalContainer.classList.add("show");
};

// Open and Close drawer
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
