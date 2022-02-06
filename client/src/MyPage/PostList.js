import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 5px 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 400px;
  height: 210px;
  overflow: auto;

  a {
    margin: 5px 5px;
  }
`;

const PostList = ({ postList }) => {
  // const [posts, setPosts] = useState([
  //   "[후기] 무등산 갔다온 썰 푼다.",
  //   "[자유] 무등산 수박 왤케 비쌈?",
  //   "[나만아는산] 우리집뒤에신선산있음.",
  //   "[크루원모집] 무등산 수박 먹으러 갈 사람!",
  //   "[후기] 무등산 갔다온 썰 푼다.",
  //   "[자유] 무등산 수박 왤케 비쌈?",
  //   "[나만아는산] 우리집뒤에신선산있음.",
  //   "[크루원모집] 무등산 수박 먹으러 갈 사람!",
  // ]);

  //   useEffect(() => {
  //     setPosts([
  //   }, []);

  return (
    <div>
      <h2>작성한 글 목록</h2>
      <Container>
        {postList.Length
          ? postList.map((title, index) => (
              <Link to="community/post/1" key={index}>
                {title}
              </Link>
            ))
          : "작성한 글이 없습니다. 😥"}
      </Container>
    </div>
  );
};

export default PostList;
