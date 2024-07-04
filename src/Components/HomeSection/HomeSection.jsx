import React, { useEffect, useState } from "react";

import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";
import { getAllTweets } from "./../../Store/Twit/Action";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweets text is required."),
});

const HomeSection = () => {
  const [uploadinImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();

  const twit = useSelector((store) => store.twit);
  console.log("Twit:    ", twit);

  useEffect(() => {
    dispatch(getAllTweets());
  }, [twit.like, twit.retwit, twit.replyTwits]);

  const handleSubmit = (values) => {
    console.log("values: " + values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
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
    <div className="space-y-5">
      <section>
        <h1 className="py- text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
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
                  placeholder="What is happening?"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("Content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
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
      <section>
        {twit.twits.map((item) => (
          <TweetCard item={item} />
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
