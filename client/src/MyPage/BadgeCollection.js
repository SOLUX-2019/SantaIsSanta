import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";

const Container = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 400px;
  place-items: center;

  img,
  div {
    width: 100px;
    height: 100px;
    text-align: center;
    align-items: center;
  }

  svg {
    margin-top: 10px;
    width: 80px;
    height: 80px;
    color: #ddd;
  }
`;

const BadgeCollection = ({ postCount }) => {
  const urls = [
    "https://cdn-icons.flaticon.com/png/128/2283/premium/2283433.png?token=exp=1644085636~hmac=d02d4e9aa7082a8eb7ef52064e14476a",
    "https://cdn-icons.flaticon.com/png/128/2283/premium/2283408.png?token=exp=1644085636~hmac=5570ba78630ada4cb28a1d8602eec0cb",
    "https://cdn-icons.flaticon.com/png/128/2283/premium/2283405.png?token=exp=1644085636~hmac=0cf591ade20fc5658db12726933de94c",
    "https://cdn-icons.flaticon.com/png/128/2283/premium/2283412.png?token=exp=1644085636~hmac=6892869fcae18cfeffdd5bc9462ca12d",
    "https://cdn-icons.flaticon.com/png/128/2283/premium/2283436.png?token=exp=1644085636~hmac=0cb027ee5b6d9d47cee632d66fa031ca",
    "https://cdn-icons.flaticon.com/png/128/2283/premium/2283447.png?token=exp=1644085636~hmac=af9975143e2ae28d2821ee6f9ed4a5db",
  ];

  return (
    <div>
      <h2>내가 모은 뱃지</h2>
      <Container>
        {urls.map((item, index) => {
          if (postCount < (index + 1) * 5)
            return (
              <EmptyCell
                limit={(index + 1) * 5}
                postCount={postCount}
                key={index}
              />
            );
          return <Badge src={item} limit={(index + 1) * 5} key={index} />;
        })}
      </Container>
    </div>
  );
};
const Badge = ({ limit, src }) => {
  return (
    <div title={`${limit}개의 게시글을 작성해서 얻었어요!`}>
      <img
        alt={`${limit}개의 게시글을 작성하면 얻을 수 있는 뱃지`}
        src={src}
      ></img>
    </div>
  );
};

const EmptyCell = ({ limit, postCount }) => {
  return (
    <div
      title={`${limit - postCount}개의 게시글을 더 작성하면 얻을 수 있어요 !`}
    >
      <FaQuestion />
    </div>
  );
};

export default BadgeCollection;
