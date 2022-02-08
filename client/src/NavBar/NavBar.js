import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import {
  NavWrap,
  Links,
  DropDown,
  DropDownButton,
  DropDownContents,
} from "./styledNav";

const NavBar = () => {
  const { isLoggedIn, setLoginInfo } = useContext(LoginContext);
  const [Title, setTitle] = useState("SantaIsSanta");
  const navigate = useNavigate();
  const regions = ["수도권", "강원도", "경상도", "전라도", "충청도", "제주도"];
  const DropDownList = regions.map((region) => (
    <Link key={region} to={`/mountain/region?region=${region}`}>
      {region}
    </Link>
  ));

  useEffect(() => {
    Axios.get("/api/user/info")
      .then((res) => {
        if (res.data.error) setLoginInfo(false, "");
        else {
          //로그인 상태
          setLoginInfo(true, res.data.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const logout = () => {
    Axios.get("/api/user/logout")
      .then((res) => {
        if (!res.data.success) {
          setLoginInfo(true, "");
          alert("로그아웃에 실패했습니다.");
        } else {
          setLoginInfo(false, "");
          alert("로그아웃 되었습니다.");
          navigate("/");
        }
      })
      .then((err) => {});
  };

  return (
    <NavWrap>
      <Link
        to="/"
        onMouseOver={() => {
          setTitle("산 타는 산타 🌳");
        }}
        onMouseLeave={() => {
          setTitle("SantaIsSanta");
        }}
      >
        {Title}
      </Link>
      <Links>
        <DropDown>
          <DropDownButton>지역별</DropDownButton>
          <DropDownContents>{DropDownList}</DropDownContents>
        </DropDown>
        <Link to="/community">커뮤니티</Link>
        {isLoggedIn ? (
          <DropDownButton onClick={logout}>로그아웃</DropDownButton>
        ) : (
          <Link to="/login">로그인</Link>
        )}
        <Link to="/myPage">마이페이지</Link>
      </Links>
    </NavWrap>
  );
};

export default NavBar;
