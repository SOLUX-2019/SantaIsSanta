import React from 'react';
import { Header } from './styledInfoPage';
import "../../assets/font/font.css";

const MountainHeader = ({info}) => {

    return (
        <Header>{info.name}</Header>
    );
};

export default MountainHeader;