import { useState } from "react";
import styled from "styled-components";
import defaultImg from "../assets/img/logo_titleX.png";

const CommentWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 10px 0;
  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  div.top {
    display: inline-block;
    width: 100px;
  }
`;

const InputWrap = styled.div`
  form {
    display: flex;
    justify-content: flex-end;
    width: 75%;
    margin: 10px auto;
    align-items: center;
  }
  textarea {
    display: block;
    flex: 1;
    height: 40px;
    padding: 10px;
    margin: 20px;
    font-size: 16px;
    resize: none;
  }

  button {
    background-color: #1e4620;
    color: white;
    width: 82px;
    font-size: 1em;
    margin: 10px 20px;
    padding: 6px 2px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    border: none;
  }
`;

export const Comment = ({ name, content }) => {
  return (
    <CommentWrap>
      <img src={defaultImg} alt="프로필 사진" />
      <div>
        <div className="top">
          <h3>{name}</h3>
        </div>
        <div>{content}</div>
      </div>
    </CommentWrap>
  );
};

export const InputComment = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <InputWrap>
      <form>
        <textarea
          placeholder="댓글을 작성하세요"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button>댓글 작성</button>
      </form>
    </InputWrap>
  );
};
