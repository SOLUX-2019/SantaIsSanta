import styled from "styled-components";
import "../../src/assets/font/font.css";
import React from "react";

const Container = styled.div`
  font-size: 20px;
  td,
  th {
    padding: 5px;
  }
  th {
    font-family: "Jalnan";
    width: 100px;
    text-align: end;
  }
  td {
    display: flex;
    width: 250px;
  }

  td.user_info > div {
    width: inherit;
    word-break: break-all;
  }
`;

const Profile = ({ user }) => {
  const { name, gender, birth, user_info } = user;

  const changeDateFormat = (data) => {
    return data.substring(0, 10).replace("-", ".").replace("-", ".");
  };

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th> 이름</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th> 성별</th>
            <td>
              {gender ? "여성 👸" : gender === null ? "비공개 👽" : "남성 🤴"}
            </td>
          </tr>
          <tr>
            <th> 생일</th>
            <td>{birth ? changeDateFormat(birth) : ""}</td>
          </tr>
          <tr>
            <th>인사말</th>
            <td className="user_info">
              <div>{user_info}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
export default Profile;
