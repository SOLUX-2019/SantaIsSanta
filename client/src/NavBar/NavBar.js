import React from "react";
import { Link } from "react-router-dom";
import {
  NavBarWrap,
  Links,
  DropDown,
  DropDownContents,
  Logo,
} from "./styledNav";

const NavBar = () => {
  let isLogin = false;

  return (
    <NavBarWrap>
      <Logo to="/">SantaIsSanta</Logo>
      <Links>
        <DropDown>
          지역별
          <DropDownContents>
            <Link to="/" className="textedLink">
              수도권
            </Link>
            <Link to="#" className="textedLink">
              강원도
            </Link>
            <Link to="#" className="textedLink">
              경상도
            </Link>
            <Link to="#" className="textedLink">
              전라도
            </Link>
            <Link to="#" className="textedLink">
              충청도
            </Link>
            <Link to="#" className="textedLink">
              제주도
            </Link>
          </DropDownContents>
        </DropDown>
        <Link to="" className="textedLink">
          커뮤니티
        </Link>
        {isLogin ? (
          <Link to="/" className="textedLink">
            로그인
          </Link>
        ) : (
          <Link to="/" className="textedLink">
            로그아웃
          </Link>
        )}
        <Link to="/" className="textedLink">
          마이페이지
        </Link>
      </Links>
    </NavBarWrap>
  );
};

export default NavBar;
