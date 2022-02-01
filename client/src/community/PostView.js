import styled from "styled-components";
import "../../src/assets/font/font.css";
import { Comment, InputComment } from "./Comment.js";

const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Pretendard";

  table {
    width: 80%;
    margin-top: 80px;
    border: 1px solid #ddd;
  }
  th {
    border-bottom: 1px solid #ddd;
    width: 25%;
    padding: 7px 17px;
  }
  th: nth-child(odd) {
    background-color: #f5f6f8;
  }
  td {
    padding: 20px 20px;
    height: 500px;
    width: 100%;
    text-align: center;
  }
`;

const CommentWrap = styled.div`
  width: 100%;
  justify-content: center;
`;

const PostViewPage = () => {
  let post = {
    pid: 1,
    category: "나만 아는 산",
    title: "첫번째 게시글입니다.",
    wname: "김산타",
    date: "2022-12-25",
    content: "내용어쩌고 산 최고 ~",
  };

  let comments = [
    {
      wname: "최산타",
      content: "댓글 내용 어쩌고 산 최고 ~",
    },
    {
      wname: "최산타",
      content: "댓글 내용 어쩌고 산 최고 ~",
    },
  ];

  return (
    <>
      <TableWrap>
        <table>
          <tr>
            <th colSpan={4}>{`[${post.category}] ${post.title}`}</th>
          </tr>
          <tr>
            <th>작성자</th>
            <th>{post.wname}</th>
            <th>작성일자</th>
            <th>{post.date}</th>
          </tr>
          <tbody>
            <td colSpan={4}>{post.content}</td>
          </tbody>
        </table>
        {true ? <AuthBtns /> : {}}
      </TableWrap>

      <CommentWrap>
        {comments.map((item, index) => (
          <Comment name={item.wname} content={item.content} key={index} />
        ))}
        <InputComment></InputComment>
      </CommentWrap>
    </>
  );
};

const AuthBtnWrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  button {
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
  .delete-Btn {
    background-color: #ee6c4d;
  }
  .edit-Btn {
    background-color: #1167b1;
  }
`;

const AuthBtns = () => {
  return (
    <AuthBtnWrap>
      <button className="delete-Btn">삭제하기</button>
      <button className="edit-Btn">수정하기</button>
    </AuthBtnWrap>
  );
};

export default PostViewPage;
