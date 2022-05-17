window.addEventListener("DOMContentLoaded", function () {
  // Filter data init start
  const filterNotes = (e) => {
    e.preventDefault();
    alert(`Filter item ${e.target.innerText}`);
  };

  const createNote = (e) => {
    e.preventDefault();
    console.log("Create note");
  };

  // Before add, remove content
  filterListDom.innerHTML = "";
  colorPickerDom.innerHTML = "";

  function addItem(item) {
    // Inserting Filter component
    const FilterInstance = new Filter({
      dom: filterListDomCloned,
      data: item,
      listener: filterNotes,
    });
    filterListDom.appendChild(FilterInstance.$el);

    // Inserting ColorPicker component
    const ColorPickerInstance = new ColorPicker({
      dom: colorPickerDomCloned.cloneNode(true),
      data: item.color,
      listener: createNote,
    });
    colorPickerDom.appendChild(ColorPickerInstance.$el);
  }

  FilterData.filterItems.forEach((item) => {
    addItem(item);
  });
  // Filter data init start

  // open and close drawer
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
    console.log(isClosest);
    if (!isClosest && drawer.classList.contains("show")) {
      drawer.classList.remove("show");
    }
  });
});