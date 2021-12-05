export default function removerRepetitive(str) {
  var res = Array.from(new Set(str.split(""))).join("");
  return res;
}
