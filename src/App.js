window.addEventListener("DOMContentLoaded", function () {
  // Filter data init start
  // Before insert, empty dom
  filterListDom.innerHTML = "";
  colorPickerDom.innerHTML = "";
  noteList.innerHTML = "";

  function addItem(item) {
    // Inserting Filter component
    const FilterInstance = new Filter({
      dom: filterListDomCloned,
      data: item,
      listener: filterNotes,
    });
    filterListDom.appendChild(FilterInstance.$el);

    // Inserting ColorPicker component
    if (item.color != "rgb(255, 255, 255)") {
      const ColorPickerInstance = new ColorPicker({
        dom: colorPickerDomCloned.cloneNode(true),
        data: item.color,
        listener: createNote,
      });
      colorPickerDom.appendChild(ColorPickerInstance.$el);
    }
  }

  function addNote(item) {
    // Inserting Note component
    const NoteInstance = new Note({
      dom: clonedNote.cloneNode(true),
      data: item,
      listeners: { onClick: openEditModal },
    });
    noteList.appendChild(NoteInstance.$el);
  }

  notes.forEach((note) => {
    addNote(note);
  });

  FilterData.filterItems.forEach((item) => {
    addItem(item);
  });
});
