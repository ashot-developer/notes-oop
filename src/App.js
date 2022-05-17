window.addEventListener("DOMContentLoaded", function () {
  // Filter data init start
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
