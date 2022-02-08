import { useState } from "react";
import Axios from "axios";
import defaultImg from "../assets/img/logo_titleX.png";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { CommentWrap, InputWrap } from "./styledComment";
import { useNavigate } from "react-router-dom";

export const Comment = ({ name, content, pid, _id, cid, isAuthor }) => {
  const [editMode, setEditmode] = useState(false);
  const toggleEditMode = () => {
    setEditmode(!editMode);
  };

  const deleteComment = () => {
    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;
    Axios.delete(`/community/comment/delete/${_id}`)
      .then((res) => {
        window.location.href = `/community/post/${pid}`;
      })
      .then((err) => {
        alert(err);
      });
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
          {editMode ? (
            <EditComment pid={pid} content={content} cid={cid} />
          ) : (
            content
          )}
        </div>
      </div>
    </CommentWrap>
  );
};

export const EditComment = ({ pid, cid, content }) => {
  const [comment, setComment] = useState(content);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const editComment = () => {
    Axios.post("/community/comment/modify", {
      pid: pid,
      content: comment,
      cid: cid,
    })
      .then((res) => {
        if (!res.data.success) alert("댓글 수정 실패");
      })
      .then((err) => {});
  };

  return (
    <InputWrap>
      <form>
        <textarea
          placeholder="댓글을 작성하세요"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={editComment}>수정 하기</button>
      </form>
    </InputWrap>
  );
};

export const NewComment = ({ pid }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const saveComment = () => {
    Axios.post("/community/comment/add", {
      wname: "", //쓰지도 않는 정보를 요청바디에 넣어줘야해.. 우하하....
      content: comment,
      pid: pid,
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
