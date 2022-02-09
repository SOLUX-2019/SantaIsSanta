import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const Wrap = styled.div`
  a {
    display: flex;
    align-items: center;
    margin: 15px 0px;
    text-decoration: none;
    color: black;
  }
  svg {
    margin-right: 3px;
  }
  a:hover {
    font-weight: 800;
  }
`;

const LinkButton = ({ path, destName }) => {
  return (
    <Wrap>
      <Link to={path}>
        <FaArrowLeft />
        {destName}
      </Link>
    </Wrap>
  );
};

export default LinkButton;
