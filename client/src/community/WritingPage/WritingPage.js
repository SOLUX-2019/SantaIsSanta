import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LinkButton from "../LinkButton";
import { FormWrap, LinkWrap } from "./styledWritingPage";
import Writer from "./Writer";

const WritingPage = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("자유");
  const [title, setTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (params.pid)
      Axios.get(`/community/post/one?pid=${params.pid}`)
        .then((res) => {
          console.log(res.data);
          const post = res.data;

          setContent(res.data.content);
          setCategory(res.data.category);
          setTitle(res.data.Title);
          setEditMode(true);
        })
        .catch((err) => {
          console.log(err);
        });
    else return;
  }, []);

  return (
    <>
      <LinkWrap>
        <LinkButton path={"/community"} destName="목록으로" />
      </LinkWrap>
      <FormWrap>
        <table>
          <tbody>
            <tr>
              <th>카테고리</th>
              <td>
                <select value={category} onChange={handleCategoryChange}>
                  <option value="후기">후기</option>
                  <option value="나만 아는 산">나만 아는 산</option>
                  <option value="크루원 모집">크루원 모집</option>
                  <option value="자유">자유</option>
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
              <th>내용</th>
              <td>
                <Writer handleChange={setContent} content={content} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="submit-btn">
          <button
            onClick={() => {
              Axios.post("/community/post/upload", {
                category: category,
                title: title,
                content: content,
                date: new Date(),
              })
                .then((res, req) => {
                  console.log(res);
                  if (!res.data.success) alert("게시글 작성에 실패했습니다.");
                  else {
                    alert("게시글 작성 성공!");
                    navigate("/community");
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            {editMode ? "수정 완료" : "작성 완료"}
          </button>
        </div>
      </FormWrap>
    </>
  );
};

export default WritingPage;
