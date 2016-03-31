class Uid {
  constructor() {
    this.currentId = 0;
  }

  get() {
    this.currentId++;
    return 'UID_' + Date.now() + '_' + this.currentId;
  }
}

export default new Uid();
