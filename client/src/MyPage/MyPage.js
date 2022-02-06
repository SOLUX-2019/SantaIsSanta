import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../src/assets/font/font.css";
import defaultImg from "../assets/img/logo_titleX.png";
import PostList from "./PostList";
import Profile from "./Profile";
import BadgeCollection from "./BadgeCollection";
import { FaPencilAlt } from "react-icons/fa";
const Wrap = styled.div`
  font-family: "Pretendard";
  height: 100vh;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  background-color: #f5f6f8;
  a {
    display: flex;
    color: black;
    text-decoration: none;
  }
  a: hover {
    font-weight: bold;
  }

  h2 {
    font-family: "Jalnan";
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 400px;
  align-items: center;

  img {
    height: 360x;
    width: 360px;
    box-shadow: 5px 5px 5px grey;
    border-radius: 50%;
  }
  a.goEdit {
    width: 80%;
    justify-content: flex-end;
    align-items: center;
    margin: 15px 0px;
    border-bottom: 1px solid #ddd;
  }
  svg {
    margin-left: 3px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

const MyPage = () => {
  const [user, setUser] = useState({
    name: "김산타",
    gender: 0,
    birth: "2000.12.25",
    info: "2년차 나무꾼입니다^^.",
  });

  return (
    <>
      <Wrap>
        <LeftContainer>
          <img src={defaultImg} alt={"프로필 사진"} />
          <Link className="goEdit" to="/modifyProfile">
            회원정보 수정
            <FaPencilAlt />
          </Link>
          <Profile user={user} />
        </LeftContainer>
        <RightContainer>
          <BadgeCollection />
          <PostList />
        </RightContainer>
      </Wrap>
    </>
  );
};
export default MyPage;
