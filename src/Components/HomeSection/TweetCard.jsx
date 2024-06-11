import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from "@mui/icons-material";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("Delete Tweet");
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log("Open Reply Model");
  };
  const handleCreateRetweet = () => {
    console.log("Create Retweet");
  };
  const handleLikeTweet = () => {
    console.log("Like Tweet");
  };
  return (
    <div className="">
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon></RepeatIcon>
        <p>You ReTweet</p>
      </div> */}

      <div className="flex space-x-5">
        <Avatar
          className="cursor-pointer"
          onClick={() => navigate(`/profile/${6}`)}
          alt="username"
          src="https://scontent.fsgn10-1.fna.fbcdn.net/v/t39.30808-1/446889174_2242024396164212_905261128201787308_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHnf2PS5Rg-xe-zG5-AG6wPv3_UPiFju-m_f9Q-IWO76eUQo05gstLrD2L6RzXxDMUFWfTFpoPOhFy2uxXWlN2m&_nc_ohc=39jXQzC-8UIQ7kNvgFVHVYD&_nc_ht=scontent.fsgn10-1.fna&oh=00_AYBPxz47ezQVN2prfL3Fzimxx_oncmqNMzOPGsnyJSlTgw&oe=666E56DC"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Thanh Binh neeee</span>
              <span className="text-gray--600">@thanhbinhne . 2m</span>
              <img
                className="m1-2 w-5 h-5"
                src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                alt=""
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div className="cursor-pointer">
              <p className="mb-2 p-0">
                twitter clone - full stack project spring boot and react
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://cdn.pixabay.com/photo/2016/12/13/22/39/motorcycle-1905281_1280.jpg"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>431</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLikeTweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteOutlined
                    onClick={handleLikeTweet}
                    className="cursor-pointer"
                  />
                )}
                <p>432</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>432</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetCard;
