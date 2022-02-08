import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LinkButton from "../LinkButton";
import Writer from "./Writer";
import { FormWrap, LinkWrap } from "./styledWritingPage";

const WritingPage = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("자유");
  const [title, setTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const editPost = () => {
    Axios.post("/community/post/modify", {
      pid: params.pid,
      title: title,
      content: content,
    })
      .then((res, req) => {
        console.log(res);
        if (!res.data.success) alert("게시글 작성에 실패했습니다.");
        else {
          alert("게시글 수정 성공!");
          navigate(`/community/post/${params.pid}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadPost = () => {
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
  };

  useEffect(() => {
    if (params.pid)
      Axios.get(`/community/post/one?pid=${params.pid}`)
        .then((res) => {
          setEditMode(true);
          setContent(res.data.content);
          setCategory(res.data.category);
          setTitle(res.data.title);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    else setIsLoading(false);
  }, []);

  return (
    <>
      <LinkWrap>
        <LinkButton path={"/community"} destName="목록으로" />
      </LinkWrap>
      {isLoading ? (
        ""
      ) : (
        <FormWrap>
          <table>
            <tbody>
              <tr>
                <th>카테고리</th>
                <td>
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    disabled={editMode}
                  >
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
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <Writer handleChange={setContent} data={content} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-btn">
            {editMode ? (
              <button onClick={editPost}>수정 완료</button>
            ) : (
              <button onClick={uploadPost}>작성 완료</button>
            )}
          </div>
        </FormWrap>
      )}
    </>
  );
};

export default WritingPage;
