import { Password } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { blue } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/Auth/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const SigninForm = () => {
  const dispath = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispath(loginUser(values));
      console.log("form value", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            className=""
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            size="large"
            // placeholder="Email Address"
            //type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            className=""
            fullWidth
            label="Password"
            name="password"
            variant="outlined"
            size="large"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          ></TextField>
        </Grid>

        <Grid className="mt-20" item xs={12}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            size="large"
            sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
          >
            Signin
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SigninForm;
