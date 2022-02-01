import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  NavWrap,
  Logo,
  Links,
  DropDown,
  DropDownButton,
  DropDownContents,
} from "./styledNav";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavWrap>
      <Logo>SantaIsSanta</Logo>
      <Links>
        <DropDown>
          <DropDownButton>지역별</DropDownButton>
          <DropDownContents>
            <Link to="/">수도권</Link>
            <Link to="/">강원도</Link>
            <Link to="/">경상도</Link>
            <Link to="/">전라도</Link>
            <Link to="/">충청도</Link>
            <Link to="/">제주도</Link>
          </DropDownContents>
        </DropDown>
        <Link to="/community">커뮤니티</Link>
        {isLogin ? <Link to="/login">로그인</Link> : <Link to="/">로그아웃</Link>}
        <Link to="/myPage">마이페이지</Link>
      </Links>
    </NavWrap>
  );
};

export default NavBar;
