import React from "react";
import Grid from "@mui/material/Grid";
import Navigation from "../Navigation/Navigation";
import HomeSection from "./../HomeSection/HomeSection";
import RightPart from "./../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TwitDetais from "../TweetDetails/TwitDetais";
import Authentication from "../Authentication/Authentication";

// const HomePage = () => {
//   return (
//     <Grid container item xs={12} className="px-5 lg:px-36 justify-between">
//       <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
//         <Navigation />
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         lg={6}
//         className="px-5 lg:px-9 hidden lg:block w-full relative"
//       >
//         <Routes>
//           <Route path="/" element={<HomeSection />}></Route>
//           <Route path="/home" element={<HomeSection />}></Route>
//           <Route path="/profile/:id" element={<Profile />}></Route>
//           <Route path="/twit/:id" element={<TwitDetais />}></Route>
//         </Routes>
//       </Grid>
//       <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
//         <RightPart />
//       </Grid>
//     </Grid>
//   );
// };

const HomePage = () => {
  return (
    <Grid container item xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={2} sm={3} md={4} lg={2.5} className="relative">
        <Navigation />
      </Grid>
      <Grid item xs={12} sm={9} md={8} lg={6} className="px-5 lg:px-9 relative">
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/home" element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/twit/:id" element={<TwitDetais />}></Route>
        </Routes>
      </Grid>
      <Grid item xs={0} sm={3} md={4} lg={3} className="relative">
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;
