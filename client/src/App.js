import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginContextProvider from "./LoginContext";
import LandingPage from "./LandingPage/LandingPage";
import NavBar from "./NavBar/NavBar";
import Login from "./Login/Login";
import Join from "./Join/Join";
import ModifyProfile from "./Profile/ModifyProfile";
import MyPage from "./MyPage/MyPage";
import PostListPage from "./community/PostList/PostListPage";
import WritingPage from "./community/WritingPage/WritingPage";
import PostViewPage from "./community/PostView";
import Mountain from "./Mountain/InfoPage/Mountain";
import RegionPage from "./Mountain/RegionPage/RegionPage";

function App() {
  return (
    <Router>
      <LoginContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/modifyProfile" element={<ModifyProfile />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/community" element={<PostListPage />} />
          <Route path="/community/write" element={<WritingPage />}>
            <Route path="/community/write/:pid" />
          </Route>
          <Route path="/community/post/:pid" element={<PostViewPage />} />
          <Route path="/mountain/region" element={<RegionPage />} />
          <Route path="/mountain/info" element={<Mountain />} />
        </Routes>
      </LoginContextProvider>
    </Router>
  );
}

export default App;
