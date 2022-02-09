import TextComponent from "./text";
import logo from "../assets/img/landing/santaBlack.png";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Page1Wrap, Page2Wrap, Gap } from "./styledLandingPage";
import { useContext } from "react";
import { LoginContext } from "../LoginContext";

const LandingPage = () => {
  const { isLoggedIn, userId } = useContext(LoginContext);

  return (
    <>
      <Page1Wrap>
        <Fade triggerOnce={false} direction={"up"} cascade delay={10}>
          <h1>
            <b>MZ세대</b>를 위한 등산 커뮤니티
          </h1>
        </Fade>
        <JackInTheBox triggerOnce={false} direction={"up"} delay={900}>
          <img src={logo} alt="산타"></img>
        </JackInTheBox>
        <Fade triggerOnce={false} delay={900}>
          {isLoggedIn ? (
            <h3>{userId}님 반가워요👋</h3>
          ) : (
            <Link to="/join">
              <b>지금 시작하기 (회원가입)</b>
              <FaAngleRight />
            </Link>
          )}
        </Fade>
      </Page1Wrap>
      <TextComponent />
      <Page2Wrap>
        <Fade triggerOnce={false} direction={"up"} cascade>
          <h2>
            산타는 산타와 함께 친구들을 만나고
            <br /> 등산과 관련된 이야기를 나눠요 !<br />
          </h2>
          <Link to="community">
            <b>커뮤니티 페이지로</b>
            <FaAngleRight />
          </Link>
          <h2>산타는 산타가 추천하는 산</h2>
          <Link to="/mountain/region?region=%EC%88%98%EB%8F%84%EA%B6%8C">
            <b>수도권 대표 산 정보 보러가기</b>
            <FaAngleRight />
          </Link>
        </Fade>
      </Page2Wrap>
    </>
  );
};
export default LandingPage;
