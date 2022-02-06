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

const SearchBar = () => {
  const [string, setString] = useState("");
  const [category, setCategory] = useState("-");

  const handleChange = (event) => {
    setString(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <SearchWrap>
      <form onSubmit={() => null}>
        <select
          value={category}
          onChange={handleCategoryChange}
          defaultValue={category}
        >
          <option value="review">후기</option>
          <option value="new">나만 아는 산</option>
          <option value="people">크루원 모집</option>
          <option value="free">자유</option>
        </select>
        <input
          type="text"
          placeholder=" Search"
          value={string}
          onChange={handleChange}
        />
        <button className="buttonClass">검색</button>
      </form>
    </SearchWrap>
  );
};
export default SearchBar;
