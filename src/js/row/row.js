export class Row {
  getHeadRow() {
    return document.querySelector("thead tr");
  }

  getBodyRows() {
    return document.querySelectorAll("tbody tr");
  }
}
