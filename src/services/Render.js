class Render {
  constructor(params) {
    this.dom = params.dom;
    this.data = params.data;
  }

  render() {
    this.emptyDom();
    this.data.forEach((elm) => {
      this.dom.appendChild(elm);
    });
  }

  emptyDom() {
    this.dom.innerHTML = "";
  }
}
