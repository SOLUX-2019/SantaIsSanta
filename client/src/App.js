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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
