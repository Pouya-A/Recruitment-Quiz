function elementOrganizer(str) {
  let strToArr = str.split("").filter((i) => i !== " ");

  let arr = [];
  for (i = 0; i <= strToArr.length - 1; i++) {
    if (
      strToArr[i] === "1" ||
      strToArr[i] === "2" ||
      strToArr[i] === "3" ||
      strToArr[i] === "4" ||
      strToArr[i] === "5" ||
      strToArr[i] === "6" ||
      strToArr[i] === "7" ||
      strToArr[i] === "8" ||
      strToArr[i] === "9"
    ) {
      if (strToArr[i - 1] === "-") {
        arr.push(parseInt(strToArr[i - 1] + strToArr[i]));
      } else {
        arr.push(parseInt(strToArr[i]));
      }
    } else {
      arr.push(strToArr[i]);
    }
  }

  var newarray = arr.filter((i) => i !== "-");
  return newarray;
}

export default function operations(ops) {
  let opsStrOpsArr = elementOrganizer(ops);
  let finalArr = [];
  console.log(opsStrOpsArr);
  opsStrOpsArr.map((item) => {
    if (typeof item === "number") {
      finalArr.push(item);
    } else if (item === "D") {
      finalArr.push(finalArr[finalArr.length - 1] * 2);
    } else if (item === "R") {
      finalArr.pop();
    } else if (item === "+") {
      finalArr.push(
        finalArr[finalArr.length - 1] + finalArr[finalArr.length - 2]
      );
    } else {
      return;
    }
  });
  return finalArr;
}
