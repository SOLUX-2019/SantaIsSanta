import styled from "styled-components";
import "../../../src/assets/font/font.css";
import { dropDownBG } from "../../NavBar/colors";

export const TableWrap = styled.div`
  table {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    border-spacing: 0;
    font-family: "Pretendard";
    font-size: 14px;
  }
  th {
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 5px;
    font-weight: bold;
    width: 100px;
  }
  tr:hover {
    background-color: #f5f6f8;
    cursor: pointer;
  }
  tr.head {
    background-color: inherit;
    cursor: default;
  }
  td {
    padding: 10px 5px;
  }
  td > a {
    text-decoration: none;
    color: black;
  }
  th:nth-child(2) {
    width: 445px;
  }
  th:nth-child(3) {
    width: 124px;
  }
  .writebutton {
    display: flex;
    justify-content: end;
    width: 90%;
    margin-right: 8%;
  }
  .writebutton > a {
    background-color: #1e4620;
    color: white;
    font-weight: bold;
    width: 100px;
    font-size: 1em;
    padding: 10px 0;
    margin-right: 30px;
    margin-bottom: 50px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    justify-content: center;
  }
`;

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 20px 0;

  div {
    display: inline-block;
    padding: 8px 16px;
    width: 30px;
    font-size: 18px;
  }
  .page-btn {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .page-btn :hover {
    color: #dd5528;
  }
`;
