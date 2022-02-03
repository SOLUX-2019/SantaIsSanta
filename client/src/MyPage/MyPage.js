import { useState } from "react";
import styled from "styled-components";
import defaultImg from "../assets/img/logo_titleX.png";
import PostList from "./PostList";
import Profile from "./Profile";
import BadgeCollection from "./BadgeCollection";

const Wrap = styled.div`
  h3.edit {
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
  }
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    height: 360x;
    width: 360px;
    box-shadow: 5px 5px 5px grey;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MyPage = () => {
  const [user, setUser] = useState({
    name: "김산타",
    gender: 0,
    date: "2000.12.25",
    info: "2년차 나무꾼입니다^^.",
  });

  return (
    <>
      <Wrap>
        <h3 className="edit">회원정보 수정하기</h3>
        <TopContainer>
          <img src={defaultImg} alt={"프로필 사진"} />
          <Profile user={user} />
        </TopContainer>
        <BottomContainer>
          <BadgeCollection />
          <PostList />
        </BottomContainer>
      </Wrap>
    </>
  );
};
export default MyPage;
