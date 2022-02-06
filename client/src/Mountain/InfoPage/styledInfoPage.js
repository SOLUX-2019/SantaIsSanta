import styled from "styled-components";

//Mountain.js
export const MountainWrapper = styled.div`
    height: 100%;
`;
    
export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    width: 60%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
`;

//MountainHeader.js
export const Header = styled.div`
    width: 100%;
    text-align: center;
    padding: 100px 0px;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    font-size: 45px;
    font-family: "Pretendard";
`;

//MountainInfo.js
export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const InfoImg = styled.div`
    width: 100%;
    padding: 60px 0px 20px 0px;
    text-align: center;

    img {
        width: 700px;
        height: 500px;
    }
`;

export const InfoText = styled.div`
    width: 100%;
    font-weight: 200;
    font-family: "Pretendard";
    color: #666;
`;

export const InfoList = styled.div`
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #ddd;

    dl{
        width: 100%;
        display: flex;
        flex-direction: baseline;
        margin: 0;
        padding: 10px 0px;
    }

    dt{
        display: inline-block;
        width: 20%;
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        font-family: "Pretendard";
    }

    dd {
        display: inline-block;
        width: 80%;
        margin: 0;
        font-weight: 200;
        font-size: 18px;
        font-family: "Pretendard";
        color: #666;
    }
`;

//MountainLoc.js
export const Loc = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
`;

export const PreviousPage = styled.span`
    font-family: "Pretendard";

    :hover {
        cursor: pointer;
    }

    .link {
        text-decoration: none;
        color: black;
    }
`;

export const LastPage = styled.span`
    font-weight: bold;
    font-family: "Pretendard";
`;

//MountainMap.js
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 60px 0px;
    border-bottom: 1px solid #ddd;
`;

export const MapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    #myMap {
        width: 100%;
        height: 300px;
    }
`;

export const Adress = styled.div`
    width: 100%;
    padding-top: 35px;

    dl{
        width: 100%;
        display: flex;
        flex-direction: baseline;
        margin: 0;
    }

    dt{
        display: inline-block;
        width: 20%;
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        font-family: "Pretendard";
      }

    dd {
        display: inline-block;
        width: 80%;
        margin: 0;
        font-weight: 200;
        font-size: 18px;
        font-family: "Pretendard";
        color: #666;
    }
`;

//MountainReview.js
export const Review = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 60px 0px;
`;

export const ReviewTitle = styled.div`
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    align-items: center;

    span {
        font-size: 40px;
        font-weight: 600;
        font-family: "Jalnan";
        margin-right: 7px;
    }
`;

export const ReviewContent = styled.div`
    width: 100%;
    padding: 25px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        border-radius: 50%;
        height: 80px;
        width: 80px;
    }
`;

export const ReviewText = styled.div`
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justify-contents: center;
`;
    
export const Id = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: 550;
        font-size: 18px;
        font-family: "Pretendard";
        color: #404040;
        margin-right: 2px;
    }
`;

export const Text = styled.div`
    font-weight: 350;
    font-size: 18px;
    font-family: "Pretendard";
    color: #404040;
`;