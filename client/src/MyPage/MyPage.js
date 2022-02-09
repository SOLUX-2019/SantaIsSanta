import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import "../../src/assets/font/font.css";
import { Wrap, LeftContainer, RightContainer } from "./styledMyPage";
import defaultImg from "../assets/img/logo_titleX.png";
import PostList from "./PostList";
import Profile from "./Profile";
import BadgeCollection from "./BadgeCollection";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("/api/user/info")
      .then((res) => {
        if (res.data.error) {
          if (!res.data.isAuth) {
            alert("로그인 후 이용해 주세요.");
            return navigate("/login");
          } else {
            alert("error");
            return navigate("/");
          }
        } else {
          setUser(res.data);
          setLoading(false);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get("/api/user/post")
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Wrap>
        <LeftContainer>
          {!isLoading && (
            <>
              <img
                src={user.image ? user.image : defaultImg}
                alt={"프로필 사진"}
              />
              <Link className="goEdit" to="/modifyProfile">
                회원정보 수정
                <FaPencilAlt />
              </Link>
              <Profile user={user} />
            </>
          )}
        </LeftContainer>
        <RightContainer>
          {!isLoading && (
            <>
              <BadgeCollection postCount={postList.length} />
              <PostList postList={postList} />
            </>
          )}
        </RightContainer>
      </Wrap>
    </>
  );
};
export default MyPage;
