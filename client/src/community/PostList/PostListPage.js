import { useEffect, useState } from "react";
import Axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { TableWrap, PaginationWrap } from "./styledPostList";
import { WriteButton, TableHead, TableBody } from "./PostListComponents";

const PostListPage = () => {
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let limit = 10;

  const slicePostList = () => {
    return postList.slice((currentPage - 1) * limit, currentPage * limit);
  };

  const handleNextPageButton = () => {
    if (currentPage != pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPageButton = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    Axios.get("/community/post/info")
      .then((res) => {
        setPostList(res.data.reverse());
        setPageCount(Math.ceil(res.data.length / limit));
        setIsLoading(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <TableWrap>
      <SearchBar
        setPostList={(list) => {
          setPostList(list);
        }}
        setPagination={(num) => {
          setCurrentPage(1);
          setPageCount(Math.ceil(num / limit));
        }}
      />
      <table>
        <TableHead />
        {isLoading ? (
          <tbody>
            <tr>
              <td>
                <div style={{ height: "300px" }} />
              </td>
            </tr>
          </tbody>
        ) : (
          <TableBody postList={slicePostList()} />
        )}
      </table>
      <PaginationWrap>
        <FaAngleLeft className="page-btn" onClick={handlePrevPageButton} />
        <div>
          {currentPage}/{pageCount}
        </div>
        <FaAngleRight className="page-btn" onClick={handleNextPageButton} />
      </PaginationWrap>
      <WriteButton />
    </TableWrap>
  );
};

export default PostListPage;
