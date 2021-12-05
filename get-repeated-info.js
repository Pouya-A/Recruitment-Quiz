function elementCounter(num) {
  const counts = {};
  var arr = num.toString().split("");
  arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}

export default function getRepeatedInfo(num) {
  let repetitiveNumber = elementCounter(num);
  var newarray = num.toString().split("");
  let obj = {};
  newarray.map((arr) => {
    let yu = "";
    for (i = 0; i < repetitiveNumber[arr]; i++) {
      for (j = 0; j < parseInt(arr); j++) {
        yu += arr;
      }
    }
    obj[parseInt(arr)] = yu;
  });
  return obj;
}
