// task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

// task 2
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// task 3
function mul(...rest) {
  let num = 1;
  let num1 = false;

  for (let i = 0; i < rest.length; i++) {
    if (typeof rest[i] == "number") {
      num1 = true;
      num *= rest[i];
    }
  }
  return num1 == false ? 0 : num;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// task 4
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// task 5
function mapBuilder(keysArray, valuesArrays) {
  let map = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArrays[i]);
  }
  return map;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
