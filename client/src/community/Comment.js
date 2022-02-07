import { useState } from "react";
import Axios from "axios";
import defaultImg from "../assets/img/logo_titleX.png";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { CommentWrap, InputWrap } from "./styledComment";
import { useNavigate } from "react-router-dom";

export const Comment = ({
  name,
  content,
  pid,
  _id,
  setComments,
  comments,
  key,
  togglereloader,
  reloader,
}) => {
  const [isAuthor, setIsAuthor] = useState(true);
  const [editMode, setEditmode] = useState(false);
  const navigate = useNavigate();
  const toggleEditMode = () => {
    setEditmode(!editMode);
  };

  const deleteComment = () => {
    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;
    Axios.delete(`/community/comment/delete/${_id}`)
      .then((res) => {
        window.location.replace(`/community/post/${pid}`);
      })
      .then((err) => {});
  };
  const editComment = () => {
    Axios.post("/community/comment/modify")
      .then((res) => {})
      .then((err) => {});
  };

  return (
    <CommentWrap>
      <img src={defaultImg} alt="프로필 사진" />
      <div>
        <div className="top">
          <h3>{name}</h3>
          {isAuthor ? (
            <div className="comment-btns">
              <FaPencilAlt onClick={toggleEditMode} />
              <FaTrashAlt onClick={deleteComment} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {editMode ? <InputComment pid={pid} content={content} /> : content}
        </div>
      </div>
    </CommentWrap>
  );
};

export const InputComment = ({ pid, content }) => {
  console.log(pid);
  const [comment, setComment] = useState(content);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const saveComment = () => {
    Axios.post(`/community/comment/add`, {
      pid: pid,
      content: comment,
    })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <InputWrap>
      <form>
        <textarea
          placeholder="댓글을 작성하세요"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={saveComment}>댓글 작성</button>
      </form>
    </InputWrap>
  );
};
