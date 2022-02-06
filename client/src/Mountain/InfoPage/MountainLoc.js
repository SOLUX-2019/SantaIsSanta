import React from 'react';
import { Link } from "react-router-dom";
import { Loc, PreviousPage, LastPage } from './styledInfoPage';
import { FaMountain, FaAngleRight } from "react-icons/fa";
import "../../assets/font/font.css";

const MountainLoc = ({region, mid}) => {

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