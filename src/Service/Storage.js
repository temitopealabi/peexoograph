class Storage {
  storeItem(item) {
    let movieListA;
    // Check if any items in ls

    if (localStorage.getItem("peexoo_dataItem") === null) {
      movieListA = [];
      // Push new item

      if (item.length >= 1) {
        movieListA = [...item];
      }

      if (item.length === 0) {
        movieListA.push(item);
      }

      // Set ls
      localStorage.setItem("peexoo_dataItem", JSON.stringify(movieListA));
    } else {
      // Get what is already in ls
      movieListA = JSON.parse(localStorage.getItem("peexoo_dataItem"));

      // Push new item
      if (item.length >= 1) {
        movieListA = [...item];
      }

      if (item.length === 0) {
        movieListA.push(item);
      }
      // Reset ls
      localStorage.setItem("peexoo_dataItem", JSON.stringify(movieListA));
    }
  }

  getItemsFromStorage() {
    let movieListA;
    if (localStorage.getItem("peexoo_dataItem") === null) {
      movieListA = [];
      return movieListA;
    } else {
      movieListA = JSON.parse(localStorage.getItem("peexoo_dataItem"));
    }
    return movieListA;
  }
}
// module.exports = NoteStorage;
export default Storage;
