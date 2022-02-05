import React, { useState } from 'react';
import { Wrapper, Container, Header, Form, RowGroup, Row, Title, Input, Select, Button, ImgBox } from './styledJoin';
import { Link } from "react-router-dom";
import Axios from 'axios';
import defaultImg from '../assets/img/logo_titleO.png';

const Join = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;

    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [gender, setGender] = useState(null);
    const [birth, setBirth] = useState(null);

    //프로필 사진 업로드 안 할 시 기본 산타 이미지 백에 보냄?? 아님 null로??
    //DB에 이미지 보낸 후  setImageURL(null);
    const [image, setImage] = useState(null); //이미지 원본
    const [imageURL, setImageURL] = useState(null); //화면에 이미지 미리보기를 띄우기 위한 blob type의 imgURL


    const submit = () => {
        //업로드한 이미지 보내기 - formData 객체로 보냄
        const formData = new FormData();
        formData.append('file', image);

        console.log({id, password, name, userInfo, gender, birth, formData, image, imageURL});
    };

    //프로필 이미지 업로드
    const uploadImg = (e) => {
        setImage(e.target.files[0])
        setImageURL(URL.createObjectURL(e.target.files[0]));
    };

    //업로드한 이미지 삭제
    // const deleteImg = () => {
    //     URL.revokeObjectURL(imageURL);
    //     setImageURL(null);
    //     setImage(null);
    // };

    return (
        <Wrapper>
           <Container>
               <Header>회원가입</Header>
               <Form>
                   {/* 필수입력 그룹 */}
                   <RowGroup>
                        <Row>
                            <Title>아이디</Title>
                            <Input name="userId" type="text" title="필수입력" onChange={(e)=> setId(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>비밀번호</Title>
                            <Input name="password" type="password" title="필수입력" onChange={(e)=> setPassword(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>이름</Title>
                            <Input name="userName" type="text" title="필수입력"  onChange={(e)=> setName(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>한 줄 소개</Title>
                            <Input name="userInfo" type="text" placeholder="경력을 포함한 한 줄 소개" title="필수입력"  onChange={(e)=> setUserInfo(e.target.value)}/>
                        </Row>
                    </RowGroup>

                    {/* 선택입력 그룹 */}
                    <RowGroup>
                        <div id="text">선택입력</div>
                        <Row>
                            <Title>생년월일</Title>
                            <Input name="birth" type="date" max={dateString} title="선택입력" onChange={(e)=> setBirth(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>성별</Title>
                            <Select name="gender" title="선택입력" defaultValue={"null"} onChange={(e)=> setGender(JSON.parse(e.target.value))}>
                                <option value="null">선택 안 함</option>
                                <option value="0">남자</option>
                                <option value="1">여자</option>
                            </Select>
                        </Row>
                        <Row>
                            <Title title="선택입력">프로필 사진</Title>
                            {imageURL ? <ImgBox src={imageURL} /> : <ImgBox src={defaultImg} />}
                            {/* {imageURL ? <DelBtn type="button" onClick={deleteImg}>삭제</DelBtn> : false} */}
                            <Input border={'none'} name="profileImg" type="file" accept="image/*" onChange={(e)=> uploadImg(e)}/>
                        </Row>
                    </RowGroup>

                    {/* 버튼 */}
                    <Button type="button" onClick={submit}>가입하기</Button>
               </Form>
           </Container>
        </Wrapper>
    );
};

export default Join;