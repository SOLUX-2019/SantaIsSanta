import styled from "styled-components";
import "../../../src/assets/font/font.css";

export const PageTitle = styled.div`
  width: 100%;
  padding: 50px 100px;
  font-family: "Pretendard";
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Pretendard";

  table {
    width: 80%;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  th {
    border-bottom: 1px solid #ddd;
    padding: 7px 17px;
    background-color: #f5f6f8;
    min-width: 100px;
    width: 20%;
  }
  td {
    border-bottom: 1px solid #ddd;
    width: 80%;
  }

  select {
    margin: 4px;
    padding: 2px 2px;
    font-size: 16px;
  }

  input,input: focus {
    width: 94%;
    padding: 2px 10px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  .ck-editor__editable {
    min-height: 400px;
  }

  div.submit-btn {
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
