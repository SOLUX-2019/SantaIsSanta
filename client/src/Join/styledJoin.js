import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
`;

export const Container = styled.div`
    background-color: #F5F6F8;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h1`
    font-size: 3em;
    font-family: "Jalnan";
`;

export const Form = styled.form`
    background-color: #F5F6F8;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RowGroup = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    #text {
        font-family: "Jalnan";
        color: #dd5528;
    }
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.div`
    width: 100%;
    margin: 20px 0px 10px 0px;
    font-family: "Jalnan";
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    font-size: 1em;
    padding: 12px 0px;
    border: ${(props) => props.border || '1px solid lightgray'};
    border-radius: 4px;
`;

export const Select = styled.select`
    width: 100%;
    height: 56px;
    font-weight: lighter;
    font-size: 1em;
    padding: 12px 0px;
    border: 1px solid lightgray;
    border-radius: 4px;
`;

export const Button = styled.button`
    background-color: #1E4620;
    color: white;
    font-weight: bold;
    font-family: "Jalnan";
    width: 30%;
    font-size: 1.3em;
    padding: 15px 0px;
    border: 1px solid #1E4620;
    border-radius: 4px;

    :hover {
        cursor: pointer;
    }
`;

export const ImgBox = styled.img`
    width: 100px;
    height: 100px;
`;

export const DelBtn = styled.button`
    background-color: #E74C3C;
    color: white;
    font-weight: bold;
    font-family: "Pretendard";
    border-radius: 4px;
    width: 50px;
    margin: 10px 0px;
    border: none;
    :hover {
        cursor: pointer;
    }
`;