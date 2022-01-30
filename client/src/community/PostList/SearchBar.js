import { useState } from "react";
import styled from "styled-components";

const SearchWrap = styled.div`
  display: flex;
  justify-content: end;
  width: 90%;
  margin-right: 8%;
  form {
    padding: 30px;
    width: 500px;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
  }

  input {
    margin: 15px 0;
    padding: 10px 5px;
    width: 390px;
    outline: none;
    border: 1px solid #bbb;
    border-radius: 3px;
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
    this.setState({ value: event.target.value });
  };

  return (
    <SearchWrap>
      <form onSubmit={() => null}>
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
