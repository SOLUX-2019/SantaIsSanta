import styled from "styled-components";

export const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Pretendard";

  table {
    width: 80%;
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

export const CommentWrap = styled.div`
  width: 100%;
  justify-content: center;
`;

export const AuthBtnWrap = styled.div`
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
