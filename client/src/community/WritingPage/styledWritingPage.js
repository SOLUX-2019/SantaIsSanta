import styled from "styled-components";
import "../../../src/assets/font/font.css";

export const PageTitle = styled.div`
  width: 100%;
  padding: 50px 100px;
  font-family: "Pretendard";
`;

export const FormWrap = styled.div`
  margin: 0 200px;

  label {
    display: block;
    padding: 10px 0 10px 0;
  }

  select {
    padding: 2px 2px;
    font-size: 16px;
  }

  input {
    width: 100%;
    padding: 2px 10px;
    font-size: 16px;
  }

  textarea {
    display: block;
    height: 200px;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    resize: none;
  }

  div {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: #1e4620;
    color: white;
    font-weight: bold;
    width: 100px;
    font-size: 1em;
    padding: 17px 0;
    margin-top: 40px;
    border: 1px solid #1e4620;
    border-radius: 4px;
    cursor: pointer;
  }
`;
