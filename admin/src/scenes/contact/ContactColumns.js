const ContactColumns = [
    { field: "_id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      // editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "lastLogin",
      headerName: "Last Login",
      type: "number",
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      editable: true,
    }
  ];
export default ContactColumns;