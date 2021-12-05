const isBalance = (string) => {
  const arr = string.split("");
  let open = [];

  const openBrackets = {
    "(": true,
    "[": true,
    "{": true,
  };

  const closedBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < arr.length; i++) {
    if (openBrackets[arr[i]]) {
      open.push(arr[i]);
    } else if (
      closedBrackets[arr[i]] &&
      open.pop() !== closedBrackets[arr[i]]
    ) {
      return false;
    }
  }

  return !open.length;
};

export default isBalance;
