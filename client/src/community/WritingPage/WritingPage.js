import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LinkButton from "../LinkButton";
import Writer from "./Writer";
import { FormWrap, LinkWrap } from "./styledWritingPage";
import { InputArea, Msg } from "../CharacterLimit";
import { LoginContext } from "../../LoginContext";

const WritingPage = ({ history }) => {
  const { isLoggedIn } = useContext(LoginContext);
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
    if (event.target.value.length > 20) return;
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
    if (!content.length) {
      alert("내용 입력은 필수입니다.");
      return;
    } else if (!title.length) {
      alert("제목을 입력해주세요.");
      return;
    } else {
      Axios.post("/community/post/upload", {
        category: category,
        title: title,
        content: content,
        date: new Date(),
      })
        .then((res) => {
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
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인 후 이용해주세요!");
      navigate("/login");
    }
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
        <div style={{ height: "720px" }} />
      ) : (
        <FormWrap>
          <table>
            <tbody>
              <tr>
                <th>카테고리</th>
                <td>
                  <select
                    defaultValue={"자유"}
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
                  <InputArea>
                    <Msg>! 최대 20자 입력 가능</Msg>
                    <input
                      type="text"
                      value={title}
                      onChange={handleTitleChange}
                    />
                  </InputArea>
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
