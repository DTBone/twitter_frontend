import { Password } from "@mui/icons-material";
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { blue } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Store/Auth/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  fullName: Yup.string().required("Full name is required"),
  dateOfBirth: Yup.object().shape({
    month: Yup.string().required("Month is required"),
    day: Yup.string().required("Day is required"),
    year: Yup.string().required("Year is required"),
  }),
});
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];
const SignupForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
    },
    validationSchema,
    onSubmit: (values) => {
      const { day, month, year } = values.dateOfBirth;
      const dateOfBirth = `${year}-${month}-${day}`;
      values.dateOfBirth = dateOfBirth;

      dispatch(registerUser(values));
      console.log("form value", values);
    },
  });

  const handleDateChange = (name) => (event) => {
    formik.setFieldValue("dateOfBirth", {
      ...formik.values.dateOfBirth,
      [name]: event.target.value,
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            className=""
            fullWidth
            label="Full Name"
            name="fullName"
            variant="outlined"
            size="large"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className=""
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            size="large"
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

        <Grid item xs={4}>
          <InputLabel>Date</InputLabel>
          <Select
            name="day"
            value={formik.values.dateOfBirth.day}
            fullWidth
            onChange={handleDateChange("day")}
            onBlur={formik.handleBlur}
            error={
              formik.touched.dateOfBirth?.day &&
              Boolean(formik.errors.dateOfBirth?.day)
            }
            helperText={
              formik.touched.dateOfBirth?.day && formik.errors.dateOfBirth?.day
            }
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.dateOfBirth?.day && formik.errors.dateOfBirth?.day}
        </Grid>

        <Grid item xs={4}>
          <InputLabel>Month</InputLabel>
          <Select
            name="month"
            value={formik.values.dateOfBirth.month}
            fullWidth
            onChange={handleDateChange("month")}
            onBlur={formik.handleBlur}
            error={
              formik.touched.dateOfBirth?.month &&
              Boolean(formik.errors.dateOfBirth?.month)
            }
            helperText={
              formik.touched.dateOfBirth?.month &&
              formik.errors.dateOfBirth?.month
            }
          >
            {months.map((month) => (
              <MenuItem key={month.value} value={month.value}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.dateOfBirth?.month &&
            formik.errors.dateOfBirth?.month && (
              <div classNme="text-sm text-red-600">
                {formik.errors.dateOfBirth.month}
              </div>
            )}
        </Grid>

        <Grid item xs={4}>
          <InputLabel>Year</InputLabel>
          <Select
            name="year"
            value={formik.values.dateOfBirth.year}
            fullWidth
            onChange={handleDateChange("year")}
            onBlur={formik.handleBlur}
            error={
              formik.touched.dateOfBirth?.year &&
              Boolean(formik.errors.dateOfBirth?.year)
            }
            helperText={
              formik.touched.dateOfBirth?.year &&
              formik.errors.dateOfBirth?.year
            }
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.dateOfBirth?.year &&
            formik.errors.dateOfBirth?.year && (
              <div classNme="text-sm text-red-600">
                {formik.errors.dateOfBirth.year}
              </div>
            )}
        </Grid>

        <Grid className="mt-20" item xs={12}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            size="large"
            sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;
