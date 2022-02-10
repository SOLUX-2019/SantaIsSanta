import React from 'react';
import {Info, InfoImg, InfoText, InfoList } from './styledInfoPage';
import { imgUrl } from './MountainImg';
import "../../assets/font/font.css";

const MountainInfo = ({info}) => {
    const name = info.name;
    const path = imgUrl[name];

    return (
        <Info>
            <InfoImg>
                <img src={path} alt={`${info.name}`} />
            </InfoImg>
            <InfoText>
                {info.content}
            </InfoText>
            <InfoList>
                <dl>
                    <dt>이용안내</dt>
                    <dd><div dangerouslySetInnerHTML={{ __html: info.user_guide }}></div></dd>
                </dl>
                <dl>
                    <dt>조심!</dt>
                    <dd><div dangerouslySetInnerHTML={{ __html: info.warning }}></div></dd>
                </dl>
                <dl>
                    <dt>구조대 연락처</dt>
                    <dd>{info.rescue}</dd>
                </dl>
            </InfoList>
        </Info>        
    );
};

export default MountainInfo;