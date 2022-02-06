import styled from "styled-components";

//MountainList.js
export const List = styled.div`
    width: 100%;
    padding: 60px 0px 100px 0px;
    display: flex;
    flex-flow: row wrap;
`;

export const Item = styled.div`
    width: 33.33%;
`;

export const Cont = styled.div`
    padding: 15px 10px;
    display: flex;
    flex-direction: column;

    :hover .img_hover {
        opacity: 0.80;
        transition: opacity 0.2s linear;
        cursor: pointer;
    }
`;

export const Image = styled.div`
    position: relative;

    img{
        width: 100%;
        height: 200px;
        border-radius: 4px;
    }

    .img_hover {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 200px;

        background-color: #222;
        opacity: 0;
        border-radius: 4px;
        color: white;
        font-weight: 600;
        text-align: center;
        line-height: 200px;
    }
`;

export const Text = styled.div`
    margin: auto;
    margin-top: 5px;
    font-size: 20px;
    color: #222;
    font-family: "Jalnan";

    ${Cont}:hover & {
        color: #dd5528;
    }
`;


//RegionPage.js
export const Region = styled.div`
    height: 100%;
`;
    
export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
`;
    
export const Loc = styled.div`
    width: 100%;
    margin-top: 40px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ddd;
`;

export const PresentPage = styled.span`
    font-family: "Pretendard";
`;