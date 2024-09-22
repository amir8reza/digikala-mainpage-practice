function mouseDownHandler(event) {
  element = event.target; // getting the scrollable element
  pos = {
    left: element.scrollLeft, // vertical scroll position .
    x: event.clientX, // mouse position when mouse down happend .
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
}

function mouseMoveHandler(event) {
  const distanceX = event.clientX - pos.x; // how far mouse moved since mouse down happend .

  element.scrollLeft = pos.left - distanceX; // scroll the element based on how far mouse moved .
}

function mouseUpHandler() {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
}
