import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Header from "~/components/Header";
import { tokens } from "~/theme";
import columns from "./TeamColumns"; // File columns config riêng
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import handleAPI from "~/api/handleAPI";
import { getAllProductFail, getAllProductStart, getAllProductSuccess } from "~/redux/reducer/ProductReducer";

function TeamTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      dispatch(getAllProductStart());
      try {
        const res = await handleAPI('/api/products');
        console.log(res.data);
        if (res.data && Array.isArray(res.data.products)) {
          setProducts(res.data.products);
          dispatch(getAllProductSuccess(res.data.products));
        }
      } catch (error) {
        dispatch(getAllProductFail(error));
        console.error(error);
      }
    };

    getAllProducts();
  }, [dispatch]);

  const modifiedColumns = columns.map((col) => {
    if (col.field === "access") {
      return {
        ...col,
        renderCell: ({ row: { access } }) => (
          <Box
            display="flex"
            width="100%"
            m="10px auto"
            p="5px"
            justifyContent="center"
            alignItems="center"
            backgroundColor={
              access === "admin" ? colors.greenAccent[600] : colors.greenAccent[200]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        ),
      };
    }
    return col;
  });

  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: 'none' },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTop: 'none'
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id} 
          rows={products}
          columns={modifiedColumns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default TeamTable;
