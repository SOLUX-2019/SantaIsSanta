import { Link } from "react-router-dom";

export const TableHead = () => {
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

export const TableBody = ({ postList }) => {
  return (
    <tbody>
      {postList.map((p, i) => (
        <TableRow post={p} key={i} />
      ))}
    </tbody>
  );
};

export const TableRow = (props) => {
  const { pid, title, wname, date, category } = props.post;
  return (
    <tr>
      <td>
        <Link to={`/community/post/${pid}`}>{pid}</Link>
      </td>
      <td>
        <Link to={`/community/post/${pid}`}>
          [{category}] {title}
        </Link>
      </td>
      <td>
        <Link to={`/community/post/${pid}`}>{wname}</Link>
      </td>
      <td>
        <Link to={`/community/post/${pid}`}>{changeDateFormat(date)}</Link>
      </td>
    </tr>
  );
};

const changeDateFormat = (data) => {
  return data.substring(0, 10);
};

export const WriteButton = () => {
  return (
    <div className="writebutton">
      <Link to="/community/write">글쓰기</Link>
    </div>
  );
};
