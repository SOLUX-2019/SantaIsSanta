import { useState } from "react";
import { Link } from "react-router-dom";
import PageController from "./Pagination";
import SearchBar from "./SearchBar";
import { TableWrap } from "./styledPostList";

const PostList = () => {
  let posts = [
    {
      pid: 1,
      title: "첫번째 게시글입니다.",
      wname: "김산타",
      date: "2022-12-25",
    },
    {
      pid: 1,
      title: "첫번째 게시글입니다.",
      wname: "김산타",
      date: "2022-12-25",
    },
    {
      pid: 1,
      title: "첫번째 게시글입니다.",
      wname: "김산타",
      date: "2022-12-25",
    },
    {
      pid: 1,
      title: "첫번째 게시글입니다.",
      wname: "김산타",
      date: "2022-12-25",
    },
    {
      pid: 1,
      title: "첫번째 게시글입니다.",
      wname: "김산타",
      date: "2022-12-25",
    },
  ];

  return (
    <TableWrap>
      <SearchBar />
      <table>
        <TableHead />
        <tbody>
          {posts.map((p, i) => (
            <TableRow post={p} key={i} />
          ))}
          {posts.map((p, i) => (
            <TableRow post={p} key={i + 5} />
          ))}
        </tbody>
      </table>
      <PageController />
      <div className="writebutton">
        <Link to="/community/write">글쓰기</Link>
      </div>
    </TableWrap>
  );
};
export default PostList;

const TableHead = () => {
  return (
    <thead>
      <tr className="head">
        <th>글번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일</th>
      </tr>
    </thead>
  );
};

const TableRow = (props) => {
  const { pid, title, wname, date } = props.post;
  return (
    <tr>
      <td>
        <Link to={`/community/post/${pid}`}>{pid}</Link>
      </td>
      <td>
        <Link to={`/community/post/${pid}`}>{title}</Link>
      </td>
      <td>
        <Link to={`/community/post/${pid}`}>{wname}</Link>
      </td>
      <td>
        <Link to={`/community/post/${pid}`}>{date}</Link>
      </td>
    </tr>
  );
};
