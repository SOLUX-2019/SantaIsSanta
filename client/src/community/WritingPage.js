import { useCallback, useState } from "react";
import styled from "styled-components";
import "../../src/assets/font/font.css";

const PageTitle = styled.div`
  width: 100%;
  padding: 50px 100px;
  font-family: "Pretendard";
`;

const FormWrap = styled.div`
  margin: 0 200px;

  label {
    display: block;
    padding: 10px 0 10px 0;
  }

  select {
    padding: 2px 2px;
    font-size: 16px;
  }

  input {
    width: 100%;
    padding: 2px 10px;
    font-size: 16px;
  }

  textarea {
    display: block;
    height: 200px;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    resize: none;
  }

  div {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: #1e4620;
    color: white;
    font-weight: bold;
    width: 100px;
    font-size: 1em;
    padding: 17px 0;
    margin-top: 40px;
    border: 1px solid #1e4620;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const WritingPage = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <PageTitle>커뮤니티 › 게시글 작성</PageTitle>
      <FormWrap>
        <form>
          <label>분류</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            defaultValue="카테고리"
          >
            <option value="review">후기</option>
            <option value="new">나만 아는 산</option>
            <option value="people">크루원 모집</option>
            <option value="free">자유</option>
          </select>
          <label>제목</label>
          <input type="text" />

          <label>내용</label>
          <textarea></textarea>
          <div>
            <button>작성 완료</button>
          </div>
        </form>
      </FormWrap>
    </>
  );
};

export default WritingPage;
