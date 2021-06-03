function handleWindowColor() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 900) {
    document.body.className = "long";
  } else if (windowWidth <= 500) {
    document.body.className = "short";
  } else {
    document.body.className = "";
  }
}

window.addEventListener("resize", handleWindowColor);
