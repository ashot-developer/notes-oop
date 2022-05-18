window.addEventListener("DOMContentLoaded", function () {
  // Filter data init start
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
    if (item.color != "rgb(255, 255, 255)") {
      const ColorPickerInstance = new ColorPicker({
        dom: colorPickerDomCloned.cloneNode(true),
        data: item.color,
        listener: createNote,
      });
      colorPickerDom.appendChild(ColorPickerInstance.$el);
    }
  }

  FilterData.filterItems.forEach((item) => {
    addItem(item);
  });
});