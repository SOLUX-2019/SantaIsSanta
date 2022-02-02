import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import NavBar from "./NavBar/NavBar";
import Login from "./Login/Login";
import Join from "./Join/Join";
import ModifyProfile from "./Profile/ModifyProfile";
import MyPage from "./MyPage/MyPage";
import PostList from "./community/PostList/PostList";
import WritingPage from "./community/WritingPage";
import PostViewPage from "./community/PostView";
import Mountain from "./Mountain/InfoPage/Mountain";
import RegionPage from "./Mountain/RegionPage/RegionPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/modifyProfile" element={<ModifyProfile />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/community" element={<PostList />} />
        <Route path="/community/write" element={<WritingPage />} />
        <Route path="/community/post/0" element={<PostViewPage />} />
        <Route path="/mountain/region" element={<RegionPage />} />
        <Route path="/mountain/info" element={<Mountain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
