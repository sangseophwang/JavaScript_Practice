function solution(s, n) {
  return s
    .split("")
    .map((element) => {
      if (element == " ") {
        return element;
      }
      const temp = element.charCodeAt();
      return element.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(temp + n - 26)
        : String.fromCharCode(temp + n);
    })
    .join("");
}
