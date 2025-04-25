import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { MenuItem } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import handleAPI from "~/api/handleAPI";
import Header from "~/components/Header";
import {
  createProductFail,
  createProductStart,
  createProductSuccess,
} from "~/redux/reducer/ProductReducer";

const initialValues = {
  name: "",
  quantity: "",
  price: "",
  discountPrice: "",
  description: "",
  sold: "",
  image: null,
  category: null,
};

function FormPage() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [categories, setCategories] = useState([]);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.product);

  const handleCreateProduct = async (values) => {
    const API = `/api/products/create`;
    dispatch(createProductStart());
    try {
      const newData = {
        name: values.name,
        quantity: values.quantity,
        price: values.price,
        discountPrice: values.discountPrice,
        description: values.description,
        sold: values.sold,
        image: values.image.name,
        category: values.category,
      };
      console.log(newData);
      const product = await handleAPI(API, "post", newData);
      dispatch(createProductSuccess(product));
      if (!product) {
        dispatch(createProductFail());
      }
    } catch (error) {
      console.log(error);
      dispatch(createProductFail());
    }
  };

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const category = await handleAPI(`/api/categories`);
        if (category) {
          setCategories(category.data);
        }
      } catch (err) {
        console.error("Fetch categories failed:", err.message);
      }
    };
    getAllCategories();
  }, []);

  return (
    <Box m="20px">
      <Box sx={{ p: "0 1rem 0 0", mb: "1rem" }}>
        <Header title="CREATE PRODUCT" subtitle="Create a New PRODUCT" />
      </Box>
      <Formik onSubmit={handleCreateProduct} initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Discount Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.discountPrice}
                name="discountPrice"
                error={!!touched.discountPrice && !!errors.discountPrice}
                helperText={touched.discountPrice && errors.discountPrice}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sold number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sold}
                name="sold"
                error={!!touched.sold && !!errors.sold}
                helperText={touched.sold && errors.sold}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Button variant="contained" component="label" onLoad={loading}>
              Upload File
              <input
                type="file"
                hidden
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("image", file); // Cập nhật vào Formik
                }}
              />
            </Button>
            <div>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={categories}
                  onChange={handleChange}
                  autoWidth
                  label="Category"
                >
                  {categories.map((e, index) => {
                    return (
                      <MenuItem value={e._id}>
                        <em>{e.name}</em>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
              >
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default FormPage;
