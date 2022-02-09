import React from 'react';
import{ Review, ReviewTitle, ReviewContent, ReviewText, Id, Text } from './styledInfoPage';
import santaImg from '../../assets/img/santa.png';
import { FcApproval } from 'react-icons/fc';
import { BsVectorPen } from 'react-icons/bs';
import "../../assets/font/font.css";

const MountainReview = ({info}) => {

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
                    <Text>{info.review}</Text>
                </ReviewText>
            </ReviewContent>
        </Review>
    );
};

export default MountainReview;