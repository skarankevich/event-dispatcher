class Dispatcher {
  constructor() {
    this.subscriptions = {};
  }
}

let instance = new Dispatcher();

export default instance;
