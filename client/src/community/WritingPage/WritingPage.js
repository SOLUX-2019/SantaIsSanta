import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageTitle, FormWrap } from "./styledWritingPage";

const WritingPage = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
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
            <button
              onClick={() => {
                navigate("/community/post/:id");
              }}
            >
              작성 완료
            </button>
          </div>
        </form>
      </FormWrap>
    </>
  );
};

export default WritingPage;
