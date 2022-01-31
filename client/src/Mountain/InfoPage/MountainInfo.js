import React from 'react';
import styled from "styled-components";
import mountainImg from '../../assets/img/jirisan.png';
import "../../assets/font/font.css";

const MountainInfo = ({mid}) => {
    
    const Info = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;

    const InfoImg = styled.div`
        width: 100%;
        padding: 60px 0px 20px 0px;
        text-align: center;

        img {
            width: 700px;
            height: 500px;
        }
    `;

    const InfoText = styled.div`
        width: 100%;
        font-weight: 200;
        font-family: "Pretendard";
        color: #666;
    `;

    const InfoList = styled.div`
        padding: 60px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #ddd;

        dl{
            width: 100%;
            display: flex;
            flex-direction: baseline;
            margin: 0;
            padding: 10px 0px;
        }

        dt{
            display: inline-block;
            width: 20%;
            margin: 0;
            font-weight: 600;
            font-size: 18px;
            font-family: "Pretendard";
        }

        dd {
            display: inline-block;
            width: 80%;
            margin: 0;
            font-weight: 200;
            font-size: 18px;
            font-family: "Pretendard";
            color: #666;
        }
    `;

    return (
        <Info>
            <InfoImg>
                <img src={mountainImg} alt="지리산" />
            </InfoImg>
            <InfoText>
                지리산은 경상남도의 하동군, 함양군, 산청군, 전라남도의 구례군, 전라북도의 남원시 등 3개 도, 5개 시군에 걸쳐있는 산이다. 1967년 최초의 대한민국의 국립공원으로 지정되었으며 대한민국에서는 483.022㎢의 가장 넓은 면적을 지닌 산악형 국립공원이다.
            </InfoText>
            <InfoList>
                <dl>
                    <dt>이용안내</dt>
                    <dd>봄,가을(3~4월,9~10월) 07:00 - 18:00 (16시까지 입산) <br/>여름(5~8월) 07:00 - 19:00 (17시까지 입산)<br/>겨울(11~2월) 09:00 - 17:00 (15시까지 입산)</dd>
                </dl>
                <dl>
                    <dt>조심!</dt>
                    <dd>가까운 곳에 반달가슴곰이 활동하고 있습니다.<br/>안전사고 예방을 위해 지정된 탐방로를 이용해주세요!</dd>
                </dl>
                <dl>
                    <dt>구조대 연락처</dt>
                    <dd>02-730-9924</dd>
                </dl>
            </InfoList>
        </Info>        
    );
};

export default MountainInfo;
