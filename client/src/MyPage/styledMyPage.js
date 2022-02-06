import styled from "styled-components";

export const Wrap = styled.div`
  font-family: "Pretendard";
  height: 100vh;
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: no-wrap;

  background-color: #f5f6f8;
  a {
    display: flex;
    color: black;
    text-decoration: none;
  }
  a: hover {
    font-weight: bold;
  }

  h2 {
    font-family: "Jalnan";
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  align-items: center;

  img {
    height: 360x;
    width: 360px;
    box-shadow: 5px 5px 5px grey;
    border-radius: 50%;
  }
  a.goEdit {
    width: 80%;
    justify-content: flex-end;
    align-items: center;
    margin: 15px 0px;
    border-bottom: 1px solid #ddd;
  }
  svg {
    margin-left: 3px;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;
