
const columns = [
    { field: "_id", headerName: "ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
    // editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    headerAlign: "left",
    align: "left",
    editable: true,
  },
  {
    field: "character",
    headerName: "Character",
    flex: 1,
    editable: true,
  },
  {
    field: "countInStock",
    headerName: "Quantity",
    flex: 0.5,
    editable: true,
  },
];
export default columns;
