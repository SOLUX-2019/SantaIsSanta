import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  border: 1px solid black;

  width: 400px;
`;

const PostList = () => {
  const [posts, setPosts] = useState([
    "[후기] 무등산 갔다온 썰 푼다.",
    "[자유] 무등산 수박 왤케 비쌈?",
    "[나만아는산] 우리집뒤에신선산있음.",
    "[크루원모집] 무등산 수박 먹으러 갈 사람!",
  ]);

  //   useEffect(() => {
  //     setPosts([

  //   }, []);

  return (
    <div>
      <h2>작성한 글 목록</h2>
      <Container>
        {posts.map((title, index) => (
          <h3 key={index}>{title}</h3>
        ))}
      </Container>
    </div>
  );
};
export default PostList;
