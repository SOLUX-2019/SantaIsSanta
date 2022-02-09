import styled from "styled-components";
import "../../src/assets/font/font.css";

export const CommentWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  div.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
  div.comment-btns {
    width: 60px;
  }
  div {
    width: 100%;
    margin-top: 5px;
  }
  h3 {
    margin: 10px;
  }
  svg: hover {
    cursor: pointer;
    color: black;
  }
  svg {
    color: grey;
    margin-left: 5px;
  }
`;
export const InputWrap = styled.div`
  font-family: "Pretendard";
  form {
    display: flex;
    justify-content: flex-end;
    margin: 10px auto;
    align-items: center;
  }
  form.new {
    margin: 15px auto;
    width: 75%;
  }
  textarea {
    display: block;
    width: 90%;
    flex: 1;
    height: 40px;
    padding: 10px;
    margin-left: 20px;
    font-family: "Pretendard";
    resize: none;
  }

  button {
    background-color: #1e4620;
    color: white;
    width: 90px;
    font-size: 1em;
    margin: 10px 20px;
    padding: 6px 4px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    border: none;
  }
`;
