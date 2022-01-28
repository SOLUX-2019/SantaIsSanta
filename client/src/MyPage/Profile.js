import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 300px;
  padding: 50px;
`;

const Profile = ({ user }) => {
  console.log(user);
  const { name, gender, date, info } = user;
  return (
    <Container>
      <h3>이름: </h3>
      <h4>{name}</h4>
      <h3>성별: </h3>
      <h4>{gender ? "남자 ♂" : "여자 ♀"}</h4>
      <h3>생일:</h3>
      <h4> {date}</h4>
      <h3>한줄 소개: </h3>
      <h4>{info}</h4>
    </Container>
  );
};
export default Profile;
