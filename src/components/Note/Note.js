class Note {
  constructor(params) {
    this.dom = params.dom;
    this.data = params.data;
    let { listeners } = params;
    this.listeners = listeners;
    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  handleClick() {
    return this.listeners.onClick && this.listeners.onClick(this.data);
  }

  changeDateFormat(d) {
    let date = new Date(d);
    let options = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleString("en-US", options);
  }

  bindData() {
    this.dom.querySelector(".note__title").innerHTML = this.data.note;
    this.dom.querySelector(".note__date").innerHTML = this.changeDateFormat(
      this.data.created_at
    );
    this.dom.style.backgroundColor = this.data.color;
  }

  bindEvents() {
    this.dom.onclick = this.handleClick;
  }

  get $el() {
    return this.dom;
  }

  init() {
    this.bindData();
    this.bindEvents();
  }
}
