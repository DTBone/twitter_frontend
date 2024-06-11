import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("change theme");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-ull text-gray-600 w-full pl-12"
          placeholder="Search Twitter"
        />

        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <BrightnessMediumIcon
          onClick={handleChangeTheme}
          className="ml-3 cursor-pointer"
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="my-2 font-bold">Subscribe to unlock new Features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="text-xl font-bold py-1">What's happening</h1>
        <div></div>
        {[1, 1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p className="text-sm">Entertaiment . Trending</p>
              <p className="font-bold">#TheMarvels</p>
              <p>3.34k Tweets</p>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </section>
    </div>
  );
};

export default RightPart;
