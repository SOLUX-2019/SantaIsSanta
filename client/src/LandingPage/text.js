import styled from "styled-components";

const Wrap = styled.div`
  border: 1px solid black;
  padding: 100px;
  margin: 50px;

  height: 40%;
  border: 1px solid black;

  justify-content: center;
`;

const TextComponent = () => {
  return (
    <Wrap>
      <h2>등산의 효능</h2>
      <h3>🎄 등산 1시간에 500칼로리 소모</h3>
      <h3>🎄 노화방지 </h3>
      <h3>🎄 심폐기능 및 근지구력향상</h3>
      <h3>🎄 만성 피로 감소 효과</h3>
    </Wrap>
  );
};
export default TextComponent;
