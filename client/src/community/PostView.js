import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "../../src/assets/font/font.css";
import { Comment, InputComment } from "./Comment.js";
import LinkButton from "./LinkButton";
import { LinkWrap } from "./WritingPage/styledWritingPage";
import { TableWrap, CommentWrap, AuthBtnWrap } from "./styledPostView";

const PostViewPage = ({ match }) => {
  const [post, setPost] = useState({});
  const params = useParams();

  useEffect(() => {
    console.log(params);
    let pid = params.pid;
    Axios.get("/community/post/one")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let comments = [
    {
      wname: "최산타",
      content: "댓글 내용 어쩌고 산 최고 ~",
    },
    {
      wname: "최산타",
      content: "댓글 내용 어쩌고 산 최고 ~",
    },
  ];

  return (
    <>
      <LinkWrap>
        <LinkButton path={"/community"} destName="목록으로" />
      </LinkWrap>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th colSpan={4}>{`[${post.category}] ${post.title}`}</th>
            </tr>
            <tr>
              <th>작성자</th>
              <th>{post.wname}</th>
              <th>작성일자</th>
              <th>{post.date}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>{post.content}</td>
            </tr>
          </tbody>
        </table>
        {true ? <AuthBtns /> : {}}
      </TableWrap>
      <CommentWrap>
        {comments.map((item, index) => (
          <Comment name={item.wname} content={item.content} key={index} />
        ))}
        <InputComment />
      </CommentWrap>
    </>
  );
};

const AuthBtns = () => {
  return (
    <AuthBtnWrap>
      <button className="delete-Btn">삭제하기</button>
      <button className="edit-Btn">수정하기</button>
    </AuthBtnWrap>
  );
};

export default PostViewPage;
