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

  const regions = ['수도권', '강원도', '경상도', '전라도', '충청도', '제주도'];
  const DropDownList = regions.map((region) => <Link key={region} to={`/mountain/region?region=${region}`}>{region}</Link>);
  
  return (
    <NavWrap>
      <Logo>SantaIsSanta</Logo>
      <Links>
        <DropDown>
          <DropDownButton>지역별</DropDownButton>
          <DropDownContents>
            {DropDownList}
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
