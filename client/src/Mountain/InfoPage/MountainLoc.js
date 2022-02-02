import React from 'react';
import { Link } from "react-router-dom";
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

        .link {
            text-decoration: none;
            color: black;
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
            <PreviousPage>
                <Link to={`/mountain/region?region=${region}`} className="link" title="페이지 이동"> {region}</Link>
            </PreviousPage>
            <FaAngleRight />
            <LastPage> {mid}</LastPage>
        </Loc>
    );
};

export default MountainLoc;