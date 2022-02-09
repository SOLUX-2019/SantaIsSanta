import styled from "styled-components";

export const InputArea = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Msg = styled.div`
  font-family: "Jalnan";
  font-size: 12px;
  color: #dd5528;
  padding-bottom: 10px;
  display: none;

  ${InputArea}:focus-within & {
    display: block;
  }
`;
