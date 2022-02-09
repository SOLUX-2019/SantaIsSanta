import React, {useState} from 'react';
import {Info, InfoImg, InfoText, InfoList } from './styledInfoPage';
import "../../assets/font/font.css";

const MountainInfo = ({info}) => {
    return (
        <Info>
            <InfoImg>
            <img src={require(`../../assets/img/mountainImg/${info.name}.png`)} alt={`${info.name}`} />
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
