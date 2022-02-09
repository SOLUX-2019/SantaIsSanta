import styled from "styled-components";
import bg1 from "../assets/img/landing/003.png";
import bg2 from "../assets/img/landing/001.png";

export const Page1Wrap = styled.div`
  width: 100%;
  height: 1280px;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black;

  font-family: "Leferi";
  font-weight: lighter;
  h1 {
    margin-top: 50px;
  }
  h2 {
    margin-top: 60px;
  }
  img {
    width: 300px;
    height: 300px;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  a {
    color: black;
    text-decoraion: none;
    align-items: center;
  }
  svg {
    width: 25px;
    height: 25px;
  }
  h3,
  a {
    display: flex;
    width: 210px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    margin: auto;
    justify-content: center;
  }
`;
export const Filter = styled.div`
width: inherit;
height: inherit;
  background-color: rgba(0, 0, 0, 0.3)
}
`;

export const Page2Wrap = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${bg2});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  text-align: center;
  color: black;

  font-family: "Leferi";
  font-weight: lighter;
  h1 {
    margin-top: 50px;
  }
  h2 {
    margin-top: 60px;
  }
  a {
    display: flex;
    justify-content: center;
    color: black;
    text-decoraion: none;
    align-items: center;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Gap = styled.div`
  width: 100%;
  height: 100px;
  background-color: #5fd082;
  background-attachment: fixed;
`;
