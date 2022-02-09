import styled from "styled-components";
import "./assets/font/font.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const FooterWrap = styled.div`
font-family: "Pretendard";
width: 100%
display: flex;
flex-basis: 750px;
align-items: center;
background-color: #F0F0F0;
text-align : center;

h4, h3{
    align-items: center;
    margin: 0;
    font-weight: normal;
    padding-bottom: 20px;
}
h3{
    padding-top: 30px;
}

li{
    pading-left: 0px;
    list-style: none;
    align-items: center;
    text-align: center;
}
svg {
    margin-right: 3px;
}
`;

const Footer = () => {
  return (
    <FooterWrap>
      <h3>SOLUX / 이공일구</h3>
      <li>
        <h4>
          <FaGithub />
          github.com/SOLUX-2019/SantaIsSanta
        </h4>
      </li>
      <li>
        <h4>
          <FaEnvelope />
          solux2019@gmail.com
        </h4>
      </li>
    </FooterWrap>
  );
};

export default Footer;
