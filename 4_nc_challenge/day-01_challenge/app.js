const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  mouseenter: function handleMouseEnter() {
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },
  mouseleave: function handleMouseLeave() {
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },
  resize: function handleResize() {
    title.style.color = colors[2];
    title.innerText = "You just resized!";
  },
  contextmenu: function handleContextMenu() {
    title.style.color = colors[4];
    title.innerText = "That was a right click!";
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseenter);
title.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
