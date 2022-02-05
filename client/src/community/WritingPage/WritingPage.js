import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageTitle, FormWrap } from "./styledWritingPage";
import Writer from "./Writer";

const WritingPage = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <PageTitle>커뮤니티 › 게시글 작성</PageTitle>
      <FormWrap>
        <table>
          <tr>
            <th>카테고리</th>
            <td>
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
            </td>
          </tr>
          <tr>
            <th>제목</th>
            <td>
              <input type="text" value={title} onChange={handleTitleChange} />
            </td>
          </tr>
          <tr>
            <th>글 작성</th>
            <td>
              <Writer data={setContent} />
            </td>
          </tr>
        </table>

        <div className="submit-btn">
          <button
            onClick={() => {
              navigate("/community/post/:id");
            }}
          >
            작성 완료
          </button>
        </div>
      </FormWrap>
    </>
  );
};

export default WritingPage;
