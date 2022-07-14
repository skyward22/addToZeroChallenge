let array = [28, 43, -1, 30, 4, 0, 12];

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let x = 1; x < array.length; x++) {
    if (i !== x) {
      if (array[i] + array[x] === 0) {
        value = true;
      }
    }
  }
}

console.log(value);
