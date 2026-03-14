import { Row } from "../row/row"

export class Table {
  constructor() {
    this.row = new Row();
    this.table = document.querySelector(".movies-table");
  }

  getValuesField(field) {
    const rows = this.row.getBodyRows();
    let idList = [];
    rows.forEach((row) => {
      idList.push([row.dataset[field], row]);
    });
    return idList;
  }

  setSortable(item) {
    this.removeSortable();
    item.classList.remove("sortable_back");
    item.classList.add("sortable");
  }

  setSortableBack(item) {
    this.removeSortable();
    item.classList.remove("sortable");
    item.classList.add("sortable_back");
  }

  checkSortable(item) {
    return item.classList.contains("sortable");
  }

  removeSortable() {
    for (const field of this.getHeadFields()) {
      field.classList.remove("sortable");
      field.classList.remove("sortable_back");
    }
  }

  getHeadFields() {
    return this.row.getHeadRow().children;
  }

  sortValues(field, direct) {
    let values = this.getValuesField(field);
    if (isNaN(Number(values[0][0]))) {
      values.sort((a, b) =>
        direct === 1 ? a[0].localeCompare(b[0]) : b[0].localeCompare(a[0]),
      );
    } else {
      values.sort((a, b) => (direct === 1 ? a[0] - b[0] : b[0] - a[0]));
    }
    return values;
  }

  sortRows(values) {
    const tableBody = this.table.lastElementChild;
    tableBody.innerHTML = "";
    for (let value of values) {
      tableBody.append(value[1]);
    }
  }
}
