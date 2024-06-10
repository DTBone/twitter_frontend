import React from "react";
import Grid from "@mui/material/Grid";
import Navigation from "../Navigation/Navigation";

const HomePage = () => {
  return (
    <Grid container xs={12} classname="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} classname="hidden lg:block w-full relative">
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} classname="hidden lg:block w-full relative">
        <p className="text-context">middle part </p>
      </Grid>
      <Grid item xs={0} lg={3} classname="hidden lg:block w-full relative">
        <p className="text-context">right part </p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
