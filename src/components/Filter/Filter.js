class Filter {
  constructor(params) {
    this.dom = params.dom.cloneNode(true);
    this.data = params.data;
    let { listeners } = params;
    this.listeners = listeners;
    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  handleClick = (e) => {
    return this.listeners.onClick && this.listeners.onClick(e, this.data);
  };

  bindEvents() {
    this.dom
      .querySelector("a")
      .addEventListener("click", (e) =>
        this.handleClick.call(null, e, this.data)
      );
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
