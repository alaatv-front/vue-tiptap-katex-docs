## EditTableModal.vue

This file provides a modal for editing tables in a user-friendly way.


The component defines a props object that accepts a tableData prop, which is passed to the component by the editor. The tableData prop is an object that contains the table's data, including the number of rows, columns, and the cell data.

The code has a data property called newTableData. The newTableData property is initialized with the original tableData passed as a prop.

The component also defines a computed property called getBorderStyle that returns the border style of one `cell-box`. Each row object contains the cells array, which represents the cells in that row.

The component uses `changeAttribute()`, `setTableNewStyles()`, `selectBorder(direction)` and `selectBackground()` to change the style of one cell.
