import React from "react";
import { Link, Routes, Route } from "react-router-dom";
//import "./NavBar.css";
import styled from "styled-components";

const NavBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0px 30px;
  background-color: #1e4620;
  font-size: 20px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px, 20px;
  width: 40%;
  height: 100%;

  .textedLink {
    display: block;
    text-align: center;
    color: white;
    text-decoration: none;
    width: 100px;
  }
  .textedLink:hover {
    color: #dd5528;
  }
`;

const Logo = styled.div`
  border: none;
  outline: none;
  background-color: inherit;
  color: white;
  text-align: center;
  padding: 0px 16px;
`;

const DropDown = styled.button`
  border: none;
  outline: none;
  background-color: #1e4620;
  position: relative;
  width: 100px;
  padding: 0px;
  color: white;
  text-decoration: none;
  font-size: inherit;
  :hover {
    color: #dd5528;
  }
`;

const DropDownContents = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 10px 5px;
  margin-top: 11px;
  position: absolute;
  display: none;
  z-index: 1;
  background-color: #a0b77f;
  :hover {
    diplay: block;
  }
  ${DropDown}:focus & {
    display: block;
  }
  ${DropDown}:hover & {
    display: block;
  }
`;

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
