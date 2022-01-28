import defaultImg from "../assets/img/logo_titleO.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import badge from "../assets/img/tempBadgeImg.png";

const Container = styled.div`
  padding: 20px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  img {
    width: 100px;
    height: 100px;
  }
`;

//뱃지확인창?? BageCollection
const BadgeInfo = () => {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    setPostCount(10);
  }, []);

  return (
    <div>
      <h2>내가 모은 뱃지</h2>
      <Container>
        <img src={badge} alt={"뱃지이미지"}></img>
        <img src={badge} alt={"뱃지이미지"}></img>
        <img src={badge} alt={"뱃지이미지"}></img>
        <img src={badge} alt={"뱃지이미지"}></img>
        <img src={badge} alt={"뱃지이미지"}></img>
        <img src={badge} alt={"뱃지이미지"}></img>
      </Container>
    </div>
  );
};
export default BadgeInfo;
