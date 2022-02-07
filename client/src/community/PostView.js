import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../src/assets/font/font.css";
import { Comment, InputComment } from "./Comment.js";
import LinkButton from "./LinkButton";
import { LinkWrap } from "./WritingPage/styledWritingPage";
import { TableWrap, CommentWrap, AuthBtnWrap } from "./styledPostView";

const PostViewPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isAuthor, setIsAuthor] = useState(true);
  const params = useParams();
  let pid = params.pid;

  useEffect(() => {
    //console.log(params);
    Axios.get(`/community/post/one?pid=${pid}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get(`/community/comment/info?pid=${pid}`)
      .then((res, req) => {
        console.log(res.data);
        setComments(res.data);
        console.log(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <th>{changeDateFormat(post.date)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </td>
            </tr>
          </tbody>
        </table>
        {isAuthor ? <AuthBtns _objectId={post._id} pid={post.pid} /> : ""}
      </TableWrap>
      <CommentWrap>
        {comments.map((item) => (
          <Comment
            name={item.wname}
            content={item.content}
            pid={item.pid}
            cid={item.cid}
            _id={item._id}
            key={item.id}
          />
        ))}
        <InputComment pid={pid} />
      </CommentWrap>
    </>
  );
};

const AuthBtns = ({ _objectId, pid }) => {
  const navigate = useNavigate();

  const deletePost = () => {
    if (!window.confirm("정말 삭제할까요?")) return;
    Axios.delete(`/community/post/delete/${_objectId}`)
      .then((res) => {
        if (!res.data.success) alert("삭제에 실패했습니다.");
        else {
          alert("삭제했습니다.");
          navigate("/community");
        }
        console.log(res);
      })
      .catch((err) => {});
  };

  const clickEditBtn = () => {
    navigate(`/community/write/${pid}`);
  };

  return (
    <AuthBtnWrap>
      <button
        className="delete-Btn"
        onClick={() => {
          deletePost();
        }}
      >
        삭제하기
      </button>
      <button className="edit-Btn" onClick={() => clickEditBtn()}>
        수정하기
      </button>
    </AuthBtnWrap>
  );
};

const changeDateFormat = (date) => {
  if (typeof date == "string") return date.substring(0, 10);
  return "";
};

export default PostViewPage;
