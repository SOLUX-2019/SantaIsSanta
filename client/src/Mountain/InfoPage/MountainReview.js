import React from 'react';
import styled from "styled-components";
import santaImg from '../../assets/img/santa.png';
import { FcApproval } from 'react-icons/fc';
import { BsVectorPen } from 'react-icons/bs';
import "../../assets/font/font.css";

const MountainReview = ({mid}) => {
    
    const Review = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 60px 0px;
    `;

    const ReviewTitle = styled.div`
        width: 100%;
        padding-bottom: 20px;
        display: flex;
        align-items: center;

        span {
            font-size: 40px;
            font-weight: 600;
            font-family: "Jalnan";
            margin-right: 7px;
        }
    `;

    const ReviewContent = styled.div`
        width: 100%;
        padding: 25px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            border-radius: 50%;
            height: 80px;
            width: 80px;
        }
    `;

    const ReviewText = styled.div`
        padding: 0px 10px;
        display: flex;
        flex-direction: column;
        justify-contents: center;
    `;
    
    const Id = styled.div`
        display: flex;
        align-items: center;

        span {
            font-weight: 550;
            font-size: 18px;
            font-family: "Pretendard";
            color: #404040;
            margin-right: 2px;
        }
    `;

    const Text = styled.div`
        font-weight: 350;
        font-size: 18px;
        font-family: "Pretendard";
        color: #404040;
    `;

    return (
        <Review>
            <ReviewTitle>
                <span>산타는산타's 한 줄 평</span>
                <BsVectorPen size={'32px'} />
            </ReviewTitle>
            <ReviewContent>
                <img src={santaImg} alt="산타" />
                <ReviewText>
                    <Id>
                        <span>산타는산타</span>
                        <FcApproval size={'18px'} />
                    </Id>
                    <Text>드라마의 배경이 된 이유가 있는 산!</Text>
                </ReviewText>
            </ReviewContent>
        </Review>
    );
};

export default MountainReview;