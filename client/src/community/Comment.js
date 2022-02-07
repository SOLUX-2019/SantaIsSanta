import { useState } from "react";
import Axios from "axios";
import defaultImg from "../assets/img/logo_titleX.png";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { CommentWrap, InputWrap } from "./styledComment";

export const Comment = ({ name, content, pid, cid }) => {
  const [isAuthor, setIsAuthor] = useState(true);
  const [editMode, setEditmode] = useState(false);

  const toggleEditMode = () => {
    setEditmode(!editMode);
  };

  const delelteComment = () => {
    Axios.delete("/community/comment/delete/:id")
      .then((res) => {})
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
              <FaTrashAlt />
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
    Axios.post(`/community/comment/add/${pid}`, {
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
