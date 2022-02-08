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
  return (
    <div>
      <h2>작성한 글 목록</h2>
      <Container>
        {postList.length
          ? postList.map((post) => (
              <Link to={`/community/post/${post.pid}`} key={post._id}>
                {`[${post.category}] ${post.title}`}
              </Link>
            ))
          : "작성한 글이 없습니다. 😥"}
      </Container>
    </div>
  );
};

export default PostList;
