class ColorPicker {
  constructor(params) {
    this.dom = params.dom;
    this.data = params.data;
    this.listener = params.listener;

    this.init();
  }

  bindEvents() {
    this.dom.addEventListener('click', this.listener);
  }

  bindData() {
    this.dom.style.backgroundColor = this.data;
  }

  get $el() {
    return this.dom;
  }

  init() {
    this.bindEvents();
    this.bindData();
  }
}