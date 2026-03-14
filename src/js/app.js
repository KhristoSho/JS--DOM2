import { Table } from "./table/table";

document.addEventListener("DOMContentLoaded", () => {
  const table = new Table();

  for (let field of table.getHeadFields()) {
    field.addEventListener("click", () => {
      let values;
      if (table.checkSortable(field)) {
        table.setSortableBack(field);
        values = table.sortValues(field.textContent);
      } else {
        table.setSortable(field);
        values = table.sortValues(field.textContent, 1);
      }

      table.sortRows(values);
    });
  }
});
