window.addEventListener("DOMContentLoaded", function () {
  // Filter data init start
  const DrawerData = {
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

  const filterNotes = (e) => {
    e.preventDefault();
    alert(`Filter item ${e.target.innerText}`);
  };

  const filterListDom = document.querySelector("ul.notes__filter");
  const cloned = filterListDom.querySelector("li").cloneNode(true);
  filterListDom.innerHTML = "";

  function addItem(item) {
    const FilterInstance = new Filter({
      dom: cloned,
      data: item,
      listener: filterNotes,
    });
    filterListDom.appendChild(FilterInstance.dom);
  }

  DrawerData.filterItems.forEach((item) => {
    addItem(item);
  });
  // Filter data init start

  // open drawer
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
