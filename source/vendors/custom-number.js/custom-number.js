class CustomNumber {
  constructor(element, callback) {
    this.buttonLess = element.querySelector(".custom-number__button--less");
    this.buttonMore = element.querySelector(".custom-number__button--more");
    this.input = element.querySelector("input");
    this.callback = callback;
    this._init();
    this._increase();
    this._reduce();
    this._change();
  }
  _init() {
      if(this.callback) {
        this.callback(this.input.value);
    }
  }
  _reduce() {
    this.buttonLess.addEventListener("click", () => {
      if (this.input.value > 1) {
        this.input.value--;
        this.input.dispatchEvent(new Event('input'));
        this.buttonLess.setAttribute("aria-disabled", false);
      }
      else {
        this.buttonLess.setAttribute("aria-disabled", true);
      }
    })
  }
  _increase() {
    this.buttonMore.addEventListener("click", () => {
      this.input.value++;
      this.input.dispatchEvent(new Event('input'));
    })
  }
  _change() {
    this.input.addEventListener("input", ()=> {
      if(this.callback) {
        this.callback(this.input.value);
      }
    })
  }
}
