const EMPTY_LIST = [];

export default class List {
  constructor(value) {
    this.list = EMPTY_LIST;
    if (value && value.length > 0) {
      this.list = value.length > 1 ? value : (value[0] ? value[0] : EMPTY_LIST);
    }
    return this;
  }

  static of(/*...values*/) {
    return new List(arguments);
  }

  collect() {
    return this.list;
  }

  each(iteratee) {
    for (let index = 0, element; (element = this.list[index]) != null; ++index) {
      iteratee(element, index, this.list);
    }
  }

  map(iteratee) {
    const result = [];
    this.each((element, index, list) => {
      result.push(iteratee(element, index, list));
    });
    this.list = result;
    return this;
  }
}