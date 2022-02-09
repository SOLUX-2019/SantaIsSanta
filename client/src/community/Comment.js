import { useState } from "react";
import Axios from "axios";
import defaultImg from "../assets/img/logo_titleX.png";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { CommentWrap, InputWrap } from "./styledComment";
import { InputArea, Msg } from "./CharacterLimit";

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
        //alert(err);
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
    if (event.target.value > 50) return;
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
        <InputArea>
          <Msg>! 최대 50자 입력 가능</Msg>
          <textarea
            placeholder="댓글을 작성하세요"
            value={comment}
            onChange={handleCommentChange}
            maxLength="50"
          />
        </InputArea>
        <button onClick={editComment}>수정하기</button>
      </form>
    </InputWrap>
  );
};

export const NewComment = ({ pid }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    if (event.target.value > 50) return;
    setComment(event.target.value);
  };

  const saveComment = () => {
    if (!comment.length) {
      alert("댓글 내용을 입력해주세요!");
      return;
    } else {
      Axios.post("/community/comment/add", {
        wname: "", //쓰지도 않는 정보를 요청바디에 넣어줘야해.. 우하하....
        content: comment,
        pid: pid,
      })
        .then((res) => {
          window.location.href = `/community/post/${pid}`;
          console.log(res);
        })
        .then((err) => {
          console.log(err);
        });
    }
  };

  return (
    <InputWrap>
      <form className="new">
        <InputArea>
          <Msg>! 최대 50자 입력 가능</Msg>
          <textarea
            placeholder="댓글을 작성하세요"
            value={comment}
            onChange={handleCommentChange}
            maxLength="50"
          />
        </InputArea>
        <button onClick={saveComment} type="button">
          댓글 작성
        </button>
      </form>
    </InputWrap>
  );
};
