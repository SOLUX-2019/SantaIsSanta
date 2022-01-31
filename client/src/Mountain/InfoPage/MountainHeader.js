import React from 'react';
import styled from "styled-components";
import "../../assets/font/font.css";

const MountainHeader = ({mid}) => {
    
    const Header = styled.div`
        width: 100%;
        text-align: center;
        padding: 100px 0px;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
        font-size: 45px;
        font-family: "Pretendard";
    `;

    return (
        <Header>{mid}</Header>
    );
};

export default MountainHeader;