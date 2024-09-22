// for search and category modal opening
const search_modal = document.getElementById("search-modal");
const overlay = document.getElementById("background-overlay");
const category_modal = document.getElementById("category-dropdown");
const product_items = document.getElementById("productitems");

function openModal(element_name) {
  if (element_name === "search") {
    overlay.style.display = search_modal.style.display = "block";
  } else {
    overlay.style.display = category_modal.style.display = "block";
  }
}

function closeModal() {
  overlay.style.display =
    category_modal.style.display =
    search_modal.style.display =
      "none";
}
