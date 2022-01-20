import styled from "styled-components";
import hot from "../img/hot.png";
import cold from "../img/cold.png";

const Weather = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  margin: 50px;

  background-color: #fef0bf;

  img {
    width: 128px;
    height: 128px;
  }
`;

const WeatherInfo = () => {
  return (
    <Weather>
      <h1>기온 별 옷 차림</h1>
      <img src={hot} alt={""}></img>
      <div>
        <h2>여름에는 ?</h2>
        <h3>땀 배출이 잘 되고 신축성이 좋은 옷</h3>
      </div>
      <img src={cold} alt={""}></img>
      <div>
        <h2>겨울에는 ? </h2>
        <h3>여러 개의 옷을 겹쳐 입기</h3>
      </div>
    </Weather>
  );
};
export default WeatherInfo;
