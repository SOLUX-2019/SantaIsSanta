import Axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const SearchWrap = styled.div`
  display: flex;
  justify-content: end;
  width: 95%;
  margin-right: 8%;

  form {
    padding: 10px 30px;
    width: 520px;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
  }

  select {
    font-weight: 400;
    margin-right: 10px;
    padding: 10px 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
  }

  input {
    margin: 15px 0;
    padding: 10px 5px;
    width: 300px;
    outline: none;
    border: 1px solid #bbb;
    border-radius: 3px;
  }
  select:focus,
  input:focus {
    outline: none;
    border: 1px solid #8c8c8c;
  }
  button {
    text-decoration: none;
    background-color: #fbeee0;
    border: 2px solid #422800;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    padding: 2px 10px;
    margin: 0 10px;
  }
`;

const SearchBar = ({ setPostList, setPagination }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("-");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const sumbitSearch = () => {
    Axios.get(`/community/post/search?title=${title}&category=${category}`)
      .then((res) => {
        if (res.data.Success != undefined) {
          console.log("err!");
          return false;
        } else {
          if (!res.data.length) alert("해당 게시물을 찾을 수 없습니다.");
          setPostList(res.data);
          setPagination(res.data.length);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return false;
  };

  return (
    <SearchWrap>
      <form onSubmit={sumbitSearch}>
        <select onChange={handleCategoryChange} defaultValue={category}>
          <option value="전체">전체</option>
          <option value="후기">후기</option>
          <option value="나만 아는 산">나만 아는 산</option>
          <option value="크루원 모집">크루원 모집</option>
          <option value="자유">자유</option>
        </select>
        <input
          type="text"
          placeholder="찾고 싶은 게시글의 제목을 입력해주세요."
          value={title}
          onChange={handleChange}
        />
        <button className="buttonClass" type="button" onClick={sumbitSearch}>
          검색
        </button>
      </form>
    </SearchWrap>
  );
};
export default SearchBar;
