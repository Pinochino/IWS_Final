import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import handleAPI from "~/api/handleAPI";
import Header from "~/components/Header";
import { createProductFail, createProductStart, createProductSuccess } from "~/redux/reducer/ProductReducer";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";


const initialValues = {
  name: "",
  price: "",
  category: "",
  character: "",
  description: "",
  images: [""],
  countInStock: "",
  sku: "",
  isFeatured: false,
  isPublished: false,
};



function FormPage() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.login.user);
  console.log("User:" ,user);


 const handleCreateProduct = async (values, { resetForm }) => {
  const API = `/api/products/create`;
  dispatch(createProductStart());


  const newData = {
    name: values.name,
    price: Number(values.price),
    category: values.category,
    character: values.character,
    description: values.description,
    images: values.images.map((url) => ({ url })),
    countInStock: Number(values.countInStock),
    sku: values.sku,
    isFeatured: values.isFeatured,
    isPublished: values.isPublished,
    user: user._id
  };

  try {
    const product = await handleAPI(API, "post", newData);

    dispatch(createProductSuccess(product));

    if (product) {
      toast.success("✅ Product created successfully!");
      resetForm(); // 🧼 clear form fields
    } else {
      dispatch(createProductFail());
      toast.error("❌ Failed to create product.");
    }

  } catch (error) {
    console.log(error);
    dispatch(createProductFail());
    toast.error(`❌ Error: ${error.response?.data?.message || error.message}`);
  }
};

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await handleAPI(`/api/categories`);
        console.log(res.data);
        if (res && res.data) {
          setCategories(res.data);
        }
        // Nếu API trả ra array trực tiếp
        else if (Array.isArray(res)) {
          setCategories(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, []);
  

  return (
    <Box m="20px">
      <Box sx={{ p: "0 1rem 0 0", mb: "1rem" }}>
        <Header title="CREATE PRODUCT" subtitle="Create a New Product" />
      </Box>
      <Formik
        onSubmit={handleCreateProduct}
        initialValues={initialValues}
      >
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
                label="Character"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.character}
                name="character"
                error={!!touched.character && !!errors.character}
                helperText={touched.character && errors.character}
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
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Count In Stock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.countInStock}
                name="countInStock"
                error={!!touched.countInStock && !!errors.countInStock}
                helperText={touched.countInStock && errors.countInStock}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="SKU"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sku}
                name="sku"
                error={!!touched.sku && !!errors.sku}
                helperText={touched.sku && errors.sku}
                sx={{ gridColumn: "span 2" }}
              />

              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  error={!!touched.category && !!errors.category}
                >
                  {categories.map((c, index) => (
                    <MenuItem key={index} value={c._id}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image URL"
                onChange={(e) => setFieldValue("images", [e.target.value])}
                onBlur={handleBlur}
                value={values.images[0] || ""}
                name="images"
                error={!!touched.images && !!errors.images}
                helperText={touched.images && errors.images}
                sx={{ gridColumn: "span 4" }}
              />

              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel>Is Featured</InputLabel>
                <Select
                  name="isFeatured"
                  value={values.isFeatured}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel>Is Published</InputLabel>
                <Select
                  name="isPublished"
                  value={values.isPublished}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>

            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default FormPage;
