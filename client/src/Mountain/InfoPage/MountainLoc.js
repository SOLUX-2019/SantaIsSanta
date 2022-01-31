import React from 'react';
import styled from "styled-components";
import { FaMountain, FaAngleRight } from "react-icons/fa";
import "../../assets/font/font.css";

const MountainLoc = ({region, mid}) => {
    
    const Loc = styled.div`
        margin-top: 40px;
        display: flex;
        align-items: center;
    `;

    const PreviousPage = styled.span`
        font-family: "Pretendard";

        :hover {
            cursor: pointer;
        }
    `;

    const LastPage = styled.span`
        font-weight: bold;
        font-family: "Pretendard";
    `;


    return (
        <Loc>
            <FaMountain />
            <FaAngleRight />
            <PreviousPage title="페이지 이동"> {region} </PreviousPage>
            <FaAngleRight />
            <LastPage> {mid}</LastPage>
        </Loc>
    );
};

export default MountainLoc;