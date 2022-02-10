import React from 'react';
import { Link } from "react-router-dom";
import { Loc, PreviousPage, LastPage } from './styledInfoPage';
import { FaMountain, FaAngleRight } from "react-icons/fa";
import "../../assets/font/font.css";

const MountainLoc = ({info}) => {

    return (
        <Loc>
            <FaMountain />
            <FaAngleRight />
            <PreviousPage>
                <Link to={`/mountain/region?region=${info.region}`} className="link" title="페이지 이동"> {info.region}</Link>
            </PreviousPage>
            <FaAngleRight />
            <LastPage> {info.name}</LastPage>
        </Loc>
    );
};

export default MountainLoc;