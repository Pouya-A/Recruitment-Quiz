function strToArr(str) {
  var fg = str.toLowerCase().split("");
  var lastIndex = fg.pop();
  fg.unshift(lastIndex);
  return fg;
}

export default function encoder(inputString, repeatCount) {
  var all_chars = inputString;
  let a = function () {
    for (j = 0; j < repeatCount; j++) {
      var finalChar = strToArr(all_chars);
      for (let i = 1; i < finalChar.length; i++) {
        let n = finalChar[i].charCodeAt() - "a".charCodeAt();
        n = (n + 1) % 26;
        finalChar[i] = String.fromCharCode(n + "a".charCodeAt());
      }

      all_chars = finalChar.join("");
    }
    return all_chars;
  };

  return a();
}
