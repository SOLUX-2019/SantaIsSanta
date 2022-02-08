import React, { useState } from 'react';
import Axios from 'axios';
import defaultImg from '../assets/img/logo_titleX.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Wrapper, Container, Header, Form, RowGroup, Row, Title, InputArea, Input, Msg, Select, Button, ImgBox, ImgBtn } from './styledJoin';

const Join = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;

    const[isVisible, setIsVisible] = useState(false);
    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [gender, setGender] = useState(null);
    const [birth, setBirth] = useState(null);
    const [imageURL, setImageURL] = useState(null);  //이미지 미리보기를 위한 blob type의 imgURL

    //업로드 버튼 클릭 시
    const uploadHandler = () => {
        document.getElementById("uploadBtn").click();
    }

    //이미지 업로드
    const uploadImg = (e) => {
        if(e.target.files[0])
            setImageURL(URL.createObjectURL(e.target.files[0]));
    };

    //업로드한 이미지 삭제
    const deleteImg = () => {
        setImageURL(null);
    };

    const submit = () => {
        console.log({id, password, name, userInfo, gender, birth, imageURL});

        Axios.post('/api/user/register', {
            id: id,
            password: password,
            name: name,
            user_info: userInfo,
            gender: gender,
            birth: birth,
            image: imageURL
        })
        .then((res) => {
            //성공
            if(res.data.success){
                if(window.confirm('회원가입에 성공하였습니다. 로그인 페이지로 이동할까요?'))
                    window.location.href = '/login';
            }
            //실패
            else {
                console.log(res.data);
                alert('회원가입에 실패하였습니다.');
            }
        })
    };

    return (
        <Wrapper>
           <Container>
               <Header>회원가입</Header>
               <Form>
                   {/* 필수입력 그룹 */}
                   <RowGroup>
                        <Row>
                            <Title>아이디</Title>
                            <InputArea>
                                <Msg>! 최대 12자 입력 가능</Msg>
                                <Input name="userId" type="text" title="필수입력" maxlength="12" onChange={(e)=> setId(e.target.value)}/>
                            </InputArea>
                        </Row>
                        <Row>
                            <Title>
                                비밀번호
                                {isVisible ? <AiOutlineEye className="icon" onClick={()=> setIsVisible(!isVisible)}/> : <AiOutlineEyeInvisible className="icon" onClick={()=> setIsVisible(!isVisible)} />}
                            </Title>
                            <InputArea>
                                <Msg>! 최소 6자 이상 입력</Msg>
                                <Input name="password" type={isVisible ? "text" : "password"} title="필수입력" minlength="6" onChange={(e)=> setPassword(e.target.value)}/>
                            </InputArea>
                        </Row>
                        <Row>
                            <Title>이름</Title>
                            <InputArea>
                                <Msg>! 최대 10자 입력 가능</Msg>
                                <Input name="userName" type="text" title="필수입력" maxlength="10" onChange={(e)=> setName(e.target.value)}/>
                            </InputArea>
                        </Row>
                        <Row>
                            <Title>한 줄 소개</Title>
                            <InputArea>
                                <Msg>! 최대 30자 입력 가능</Msg>
                                <Input name="userInfo" type="text" placeholder="경력을 포함한 한 줄 소개" title="필수입력" maxlength="30" onChange={(e)=> setUserInfo(e.target.value)}/>
                            </InputArea>
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
                                <option value="false">남자</option>
                                <option value="true">여자</option>
                            </Select>
                        </Row>
                        <Row>
                            <Title title="선택입력">프로필 사진</Title>
                            {imageURL ? <ImgBox src={imageURL} /> : <ImgBox src={defaultImg} />}
                            {imageURL ? <ImgBtn type="button" color={'#1167b1'} onClick={deleteImg}>취소</ImgBtn> 
                                : <ImgBtn type="button" onClick={uploadHandler}>업로드</ImgBtn>}
                            <Input display={'none'} id="uploadBtn" name="profileImg" type="file" accept="image/*" onChange={(e)=> uploadImg(e)}/>
                        </Row>
                    </RowGroup>

                    <Button type="button" onClick={submit}>가입하기</Button>
               </Form>
           </Container>
        </Wrapper>
    );
};

export default Join;