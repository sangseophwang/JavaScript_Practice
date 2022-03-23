function timeConversion(s) {
  const array = s.slice(0, s.length - 2).split(":");

  if (s.slice(s.length - 2) === "PM") {
    array[0] !== "12" && (array[0] = Number(array[0]) + 12);
  } else {
    array[0] === "12" && (array[0] = "00");
  }
  return array.join(":");
}
