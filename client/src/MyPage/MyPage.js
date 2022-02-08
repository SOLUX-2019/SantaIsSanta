import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import "../../src/assets/font/font.css";
import { Wrap, LeftContainer, RightContainer } from "./styledMyPage";
import defaultImg from "../assets/img/logo_titleX.png";
import PostList from "./PostList";
import Profile from "./Profile";
import BadgeCollection from "./BadgeCollection";

const MyPage = () => {
  const [user, setUser] = useState({});
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("/api/user/info")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get("/api/user/post")
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <>
      <Wrap>
        <LeftContainer>
          <img src={user.img ? user.img : defaultImg} alt={"프로필 사진"} />
          <Link className="goEdit" to="/modifyProfile">
            회원정보 수정
            <FaPencilAlt />
          </Link>
          <Profile user={user} />
        </LeftContainer>
        <RightContainer>
          <BadgeCollection postCount={postList.length} />
          <PostList postList={postList} />
        </RightContainer>
      </Wrap>
    </>
  );
};
export default MyPage;
