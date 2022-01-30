import { useEffect, useState } from "react";
import styled from "styled-components";

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
      <button className="prev">◀</button>
      <div>
        {currentPage}/{pageCount}
      </div>
      <button className="next">▶</button>
    </PageWrap>
  );
};
export default PageController;

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 20px;
  div, button {
    display: inline-block;
    width: 30%
    padding: 8px 16px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: inherit;
  }
`;
