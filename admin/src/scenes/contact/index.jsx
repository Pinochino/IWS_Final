import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "~/theme";
import Header from "~/components/Header";
import ContactColumns from "./ContactColumns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsersFail, getAllUsersStart, getAllUsersSuccess } from "~/redux/reducer/UserReducer";
import handleAPI from "~/api/handleAPI";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";

function ContactTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getAllUsers = async () => {
        dispatch(getAllUsersStart());
        try {
          const res = await handleAPI('/api/admin/users');
          console.log(res.data);
          if (res.data && Array.isArray(res.data)) {
            setUsers(res.data);
            dispatch(getAllUsersSuccess(res.data));
          }
        } catch (error) {
          dispatch(getAllUsersFail(error));
          console.error(error);
        }
      };
  
      getAllUsers();
    }, [dispatch]);
  
    const modifiedColumns = ContactColumns.map((col) => {
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
            rows={users}
            columns={modifiedColumns}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50]}
            disableSelectionOnClick
          />
        </Box>
      </Box>
    );
}

export default ContactTable;