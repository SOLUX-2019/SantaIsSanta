import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Wrap = styled.div`
  background: linear-gradient(rgba(183, 233, 255, 0.6), rgba(183, 233, 255, 1));
  height: 30%;
  display: flex;
  justify-content: space-around;
  div.card {
    font-family: "Jalnan";
    border-radius: 20px;
    padding: 10px;
    box-shadow: 5px 5px 5px grey;
    background-color: ivory;
    display: block;
    width: 285px;
    height: 250px;
    text-align: center;
    margin-top: 100px;
  }
  div.inner {
    font-family: "Pretendard";
    text-align: left;
    border-top: 1px solid grey;
    padding-left: 15px;
  }
`;

const TextComponent = () => {
  return (
    <Wrap>
      <Slide triggerOnce={false} delay={50}>
        <div className="card">
          <h3>등산의 효능 ✨</h3>
          <div className="inner">
            <h4>🎄 1시간에 500칼로리 소모</h4>
            <h4>🎄 노화방지에 도움 💋</h4>
            <h4>🎄 심폐기능 및 근지구력 향상 </h4>
            <h4>🎄 만성 피로 감소 효과 💪</h4>
          </div>
        </div>
      </Slide>
      <Slide triggerOnce={false} direction="right" delay={50}>
        <div className="card">
          <h3>☃️겨울 철 등산 요령</h3>
          <div className="inner">
            <h4>🎄 여러 개의 옷을 겹쳐 입기</h4>
            <h4>🎄 설맹증 위험! 선글라스🕶️ 챙겨요</h4>
            <h4>🎄 1500m⬆️ 산은 3시 이전 하산하기</h4>
            <h4>🎄 일기예보 꼭 체크해요</h4>
          </div>
        </div>
        <div className="card">
          <h3>🌞여름 철 등산 요령</h3>
          <div className="inner">
            <h4>🎄 땀 배출, 신축성이 좋은 옷</h4>
            <h4>🎄 자외선 차단 필수 🌈</h4>
            <h4>🎄 수분 섭취 신경 써요 !</h4>
            <h4>🎄 갑작스런 비 대비하기</h4>
          </div>
        </div>
      </Slide>
    </Wrap>
  );
};
export default TextComponent;
