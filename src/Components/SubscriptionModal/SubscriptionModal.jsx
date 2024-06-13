import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  bordeRadius: 4,
};

const fetures = [
  "Prioritized rankings in conversations and search.",
  "See approximately twice as many Tweets between ads in yours For You and Following timelines.",
  "Add bold and italic text in your Tweets.",
  "Post longer videos and 1080p video uploads.",
  "All the existing Blue features, including Edit Tweet, BookMark Folders and early access to new features.",
];

export default function SubscriptionModal({ handleClose, open }) {
  const [plan, setPlan] = React.useState("Anunalluy");
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10 px-10">
            <div className="w-[80%} space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg">
                <h1 className="text-xl pr-">
                  Blue subscribes with a verified phone number will get a blue
                  checkmark once approved.
                </h1>
                <img
                  className="ml-2 w-24 h-24"
                  src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between border rounded-full px-5 py-3 border-gray-600">
                <div>
                  <span
                    onClick={() => setPlan("Anunalluy")}
                    className={`${
                      plan === "Anunalluy" ? "text-black" : "text-gray-400"
                    }cursor-pointer`}
                  >
                    Anunalluy
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  }cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
                {fetures.map((item) => (
                  <div className="flex items-center spcae-x-5">
                    <FiberManualRecordIcon
                      className="mr-3"
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3">
                <span className="line-through italic"> $225.00 </span>
                <span className="px-5"> $198.00/year </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
