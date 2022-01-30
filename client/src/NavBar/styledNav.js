import styled from "styled-components";
import "../../src/assets/font/font.css";
import { Background, highlight, dropDownBG, white } from "./colors";

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  height: 50px;
  background-color: ${Background};
  font-family: "Jalnan";
`;

export const Logo = styled.div`
  color: white;
  text-align: center;
`;

export const DropDown = styled.div``;
export const DropDownButton = styled.button`
  border: none;
  outline: none;
  background-color: ${Background};
  position: relative;
  height: 100%;
  color: white;
  text-decoration: none;
  font-size: inherit;
  font-family: "Jalnan";

  :hover {
    color: ${highlight};
  }
`;

export const DropDownContents = styled.div`
  display: none;
  border-radius: 2px;
  position: absolute;
  margin-left: -10px;
  z-index: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px 20px;
  background-color: ${dropDownBG};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    padding: 3px 0px;
  }

  ${DropDown}:focus & {
    display: flex;
  }
  ${DropDown}:hover & {
    display: flex;
  }
`;

export const Links = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  height: 100%;
  width: 40%;
  padding: 10px, 5px;

  a {
    align-self: center;
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: ${highlight};
  }
`;
