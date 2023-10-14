class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUM = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.toLowerCase().charCodeAt(0) - 96;

      total = (total * PRIME_NUM + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
      this.keyMap[index].push([key, value]);
    } else {
      this.keyMap[index].push([key, value]);
    }
    return this.keyMap;
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      console.log(this.keyMap[index].find((el) => el[0] === key));

      const item = this.keyMap[index].find((el) => el[0] === key);
      console.log(item[1]);
      return item[1];
      //   return this.keyMap[index].find((el) => el[0] === key);
    }

    return undefined;
  }

  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }

    console.log(valuesArr);
  }
  keys() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][0]);
        }
      }
    }

    console.log(valuesArr);
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#ffff00");
ht.set("olive", "#808000");
ht.set("salmon", "#fa8072");
ht.set("mediumvioletred", "#c71585");
ht.set("plum", "#dda0dd");

ht.get("maroon");

ht.values();
ht.keys();
