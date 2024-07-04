import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import AuthModal from "./AuthModal";

const Authentication = () => {
  const [openAuthModal, setOpenAuthModel] = useState(false);
  const handleOpenAuthModal = () => {
    setOpenAuthModel(true);
  };
  const handleCloseAuthModal = () => {
    setOpenAuthModel(false);
  };
  return (
    <div className="">
      <Grid className="overflow-y-hidden " container>
        <Grid className="hidden lg:block" item lg={7}>
          <img
            className="w-full h-screen"
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            alt=""
          />
          <div className="absolute top-[26%] left-[19%]">
            <svg
              width="300"
              height="300"
              viewBox="0 0 1500 1500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                fill="black"
              />
            </svg>
          </div>
        </Grid>

        <Grid className="px-10 " item lg={5} xs={12}>
          <h1 className="font-bold text-6xl mt-10">Happening Now</h1>
          <h1 className="font-bold text-3xl py-16">Join Twitter Today</h1>
          <div className="w-[60%]">
            <div className="w-full">
              <GoogleLogin width={330} />
              <p className="py-5 text-center">OR</p>
              <Button
                onClick={handleOpenAuthModal}
                className=""
                fullWidth
                variant="contained"
                size="large"
                sx={{ borderRadius: "29px", py: "7px" }}
              >
                Create Account
              </Button>
              <p className="text-sm mt-2">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie User
              </p>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-xl mb-5">Already Have Account?</h1>
              <Button
                onClick={handleOpenAuthModal}
                className=""
                fullWidth
                variant="outlined"
                size="large"
                sx={{ borderRadius: "29px", py: "7px" }}
              >
                LOGIN NOW
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div>
  );
};

export default Authentication;
