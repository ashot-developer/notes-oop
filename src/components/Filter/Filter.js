class Filter {
  constructor(params) {
    this.dom = params.dom.cloneNode(true);
    this.data = params.data;
    this.listener = params.listener;
    this.init();
  }

  bindEvents() {
    this.dom.querySelector("a").addEventListener("click", this.listener);
  }

  bindData() {
    this.dom.querySelector("a").innerHTML = this.data.text;
    this.dom.querySelector("a").style.backgroundColor = this.data.color;
  }

  emptyFilter() {
    this.dom.remove();
  }

  get $el() {
    return this.dom;
  }

  init() {
    this.emptyFilter();
    this.bindEvents();
    this.bindData();
  }
}
