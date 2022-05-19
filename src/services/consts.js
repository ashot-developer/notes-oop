const FilterData = {
  filterItems: [
    { text: "Select All", color: "rgb(255, 255, 255)" },
    { text: "Select", color: "rgb(163, 205, 250)" },
    { text: "Select", color: "rgb(205, 160, 234)" },
    { text: "Select", color: "rgb(229, 87, 88)" },
    { text: "Select", color: "rgb(154, 246, 154)" },
    { text: "Select", color: "rgb(253, 248, 103)" },
    { text: "Select", color: "rgb(113, 244, 232)" },
  ],
};

const notes = [ ];
// Filter list Element
const filterListDom = document.querySelector("ul.notes__filter");
const filterListDomCloned = filterListDom.querySelector("li").cloneNode(true);

// Color picker list Element
const colorPickerDom = document.querySelector("ul.notes__colors--list");
const colorPickerDomCloned = colorPickerDom
  .querySelector("li.color__item")
  .cloneNode(true);

// Note element
const noteList = document.querySelector(".notes__list");
const clonedNote = noteList.querySelector(".notes__list--box").cloneNode(true);
