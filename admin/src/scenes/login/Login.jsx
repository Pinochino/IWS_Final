import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import handleAPI from "~/api/handleAPI";
import {
  loginFail,
  loginStart,
  loginSuccess,
} from "~/redux/reducer/UserReducer";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleChangeInput = useCallback(
    (name, value) =>
      setData((prev) => ({
        ...prev,
        [name]: value,
      })),
    []
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log(data);
      dispatch(loginStart());
      try {
        const res = await handleAPI(`/api/users/login`, "post", data);
        const result = res.data;
        dispatch(loginSuccess(result));
        // After login success
Cookies.set("token", result.token, { expires: 7 }); // Expires in 7 days

        console.log(res);
        navigate("/");
        setData({ email: "", password: "" });
      } catch (error) {
        dispatch(loginFail(error.response?.data?.message || error.message));
      }
    },
    [data, dispatch, navigate]
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor={theme.palette.background.default}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: 400,
          maxWidth: "90%",
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" mb={3} fontWeight="bold" color="primary">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={data.email}
            onChange={(e) => handleChangeInput("email", e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={data.password}
            onChange={(e) => handleChangeInput("password", e.target.value)}
            required
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2, py: 1.5 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
