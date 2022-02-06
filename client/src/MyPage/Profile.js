import styled from "styled-components";
import "../../src/assets/font/font.css";

const Container = styled.div`
  font-size: 20px;
  td,
  th {
    padding: 5px;
  }
  th {
    font-family: "Jalnan";
    width: 100px;
  }
  td {
    width: 250px;
  }
`;

const Profile = ({ user }) => {
  console.log(user);
  const { name, gender, birth, info } = user;
  return (
    <Container>
      <table>
        <tr>
          <th>이름</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>성별</th>
          <td>{gender ? "남성" : "여성"}</td>
        </tr>
        <tr>
          <th>생일</th>
          <td>{birth}</td>
        </tr>
        <tr>
          <th>인사말</th>
          <td>{info}</td>
        </tr>
      </table>
    </Container>
  );
};
export default Profile;
