import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BorderAllRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";
import { useState } from "react";

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
  borderRadius: 4,
};
const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweets text is required."),
});
export default function ReplyModal({ handleClose, open }) {
  const navigate = useNavigate();

  const [uploadinImage, setUploadingImage] = React.useState(false);
  const [selectImage, setSelectedImage] = React.useState("");

  const handleSubmit = (values) => {
    console.log("values: " + values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: 4,
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);

    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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

                  <img
                    className="ml-2 w-5 h-5"
                    src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                    alt=""
                  />
                  <span className="text-gray-600">@thanhbinhne . 2m</span>
                </div>
              </div>

              <div className="mt-2">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/twit/${3}`)}
                >
                  <p className="mb-2 p-0">
                    twitter clone - full stack project spring boot and react
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10`}>
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                src="https://scontent.fsgn10-1.fna.fbcdn.net/v/t39.30808-1/446889174_2242024396164212_905261128201787308_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHnf2PS5Rg-xe-zG5-AG6wPv3_UPiFju-m_f9Q-IWO76eUQo05gstLrD2L6RzXxDMUFWfTFpoPOhFy2uxXWlN2m&_nc_ohc=39jXQzC-8UIQ7kNvgFVHVYD&_nc_ht=scontent.fsgn10-1.fna&oh=00_AYBPxz47ezQVN2prfL3Fzimxx_oncmqNMzOPGsnyJSlTgw&oe=666E56DC"
              />
              <div className="w-full">
                <form className={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="Reply"
                      className={`border-none outline-none text-xl bg-transparent`}
                      {...formik.getFieldProps("Content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]"></ImageIcon>
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>
                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "20px",
                          paddingY: "8px",
                          paddingX: "20px",
                          bgcolor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}