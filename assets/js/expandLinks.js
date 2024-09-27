function linkExpandHandler(event) {
  let linkElement = event.currentTarget.getElementsByClassName("links")[0];
  linkElement.classList.toggle("show");
}
