import Axios from 'axios';
import React, { useState, useEffect }from 'react';
import { Wrapper, Container, Header, Form, RowGroup, Row, Title, Input, Select, Button } from '../Join/styledJoin';

const ModifyProfile = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [birth, setBirth] = useState(null);
    const [gender, setGender] = useState(null);

    const birthParser = (birth) => {
        if(birth == null)
            return null;
        else
            //'YYYY-MM-DD' 형식으로 변경
            return birth.substr(0,10);
    }

    //렌더링 시 회원정보 불러오기
    useEffect(() => {
        Axios.get('/api/user/info')
        .then((res) => {
           //실패
           if(res.data.error) {
                alert('로그인을 먼저 해주세요.');
                window.location.href = '/login';
           }
           //성공
           else {
                setId(res.data.id);
                setName(res.data.name);
                setUserInfo(res.data.user_info);
                setBirth(birthParser(res.data.birth));
                setGender(res.data.gender);
           }
        })
    }, []);

    const submit = () => {
        Axios.post('/api/user/modify', {
            id: id,
            user_info: userInfo,
            name: name,
            birth: birth,
            gender: gender
        })
        .then((res) => {
            //성공
            if(res.data.success)
                alert('회원정보가 수정되었습니다.');
            //실패    
            else
                console.log(res.data.err);
        })
    };

    return (
        <Wrapper>
           <Container>
               <Header>회원정보 수정</Header>
               <Form>
                    <RowGroup>
                        <Row>
                            <Title>이름</Title>
                            <Input name="userName" type="text" title="필수입력" defaultValue={name} onChange={(e)=> setName(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>아이디</Title>
                            <Input name="userId" type="text" title="필수입력" defaultValue={id} onChange={(e)=> setId(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>한 줄 소개</Title>
                            <Input name="userInfo" type="text" placeholder="경력을 포함한 한 줄 소개" title="필수입력" defaultValue={userInfo} onChange={(e)=> setUserInfo(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>생년월일</Title>
                            <Input name="birth" type="date" max={dateString} title="선택입력" defaultValue={birth} onChange={(e)=> setBirth(e.target.value)}/>
                        </Row>
                        <Row>
                            <Title>성별</Title>
                            <Select name="gender" title="선택입력" key={`${gender}`} defaultValue={`${gender}`} onChange={(e)=> setGender(JSON.parse(e.target.value))}>
                                <option value="null">성별</option>
                                <option value="false">남자</option>
                                <option value="true">여자</option>
                            </Select>
                        </Row>
                    </RowGroup>

                    <Button type="button" onClick={submit}>수정 완료</Button>
               </Form>
           </Container>
        </Wrapper>
    );
}

export default ModifyProfile;