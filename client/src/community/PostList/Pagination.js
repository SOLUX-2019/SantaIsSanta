import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PageController = () => {
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [postCount, setPostCount] = useState(0);
  const [pageCount, setPageCount] = useState(3);

  useEffect(() => {
    //setPageCount(Math.ceil(postCount / limit));
  });

  return (
    <PageWrap>
      <FaAngleLeft className="page-btn" onClick={() => {}} />
      <div>
        {currentPage}/{pageCount}
      </div>
      <FaAngleRight className="page-btn" onClick={() => {}} />
    </PageWrap>
  );
};
export default PageController;

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 20px 0;

  div {
    display: inline-block;
    padding: 8px 16px;
    width: 30px;
    font-size: 18px;
  }
  .page-btn {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .page-btn :hover {
    color: #dd5528;
  }
`;
