const NUMBER_OF_ARRAY_BARS = 200;

function randomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function (setArray, setArrayClone) {
  let array = [];
  for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
    array.push(randomFromInterval(5, 730));
  }
  setArray(array);
  setArrayClone(array);
}
