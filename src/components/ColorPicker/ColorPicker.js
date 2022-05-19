class ColorPicker {
  constructor(params) {
    this.dom = params.dom;
    this.data = params.data;
    let { listeners } = params;
    this.listeners = listeners;
    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  handleClick() {
    return this.listeners.onClick && this.listeners.onClick(this.$el, this.data);
  }

  bindEvents() {
    this.dom.onclick = this.handleClick;
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