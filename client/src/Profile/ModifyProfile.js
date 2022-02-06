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

    //렌더링 시 회원정보 불러오기, state값으로 설정
    useEffect(() => {
        Axios.get('/api/user/info')
        .then((res) => {
           console.log(res);             
        })
    }, []);

    //각 state값 백에 넘기기
    const submit = () => {
        // console.log({id, name, userInfo, birth, gender});
        Axios.post('/api/user/modify', {
            id: id,
            user_info: userInfo,
            name: name,
            birth: birth,
            gender: gender
        })
        .then((res) => {
            console.log(res.data);
            if(res.data.success)
                alert('회원정보가 수정되었습니다.');
            else
                console.log(res.data.err);
        })
    };

    return (
        <Wrapper>
           <Container>
               <Header>회원정보 수정</Header>
               <Form>
                   {/* DB에 저장된 내용 불러와서 input 태그 defaultValue로 지정 */}
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
                            <Select name="gender" title="선택입력" defaultValue={`${gender}`} onChange={(e)=> setGender(JSON.parse(e.target.value))}>
                                <option value="null">성별</option>
                                <option value="0">남자</option>
                                <option value="1">여자</option>
                            </Select>
                        </Row>
                    </RowGroup>

                    {/* 버튼 */}
                    <Button type="button" onClick={submit}>수정 완료</Button>
               </Form>
           </Container>
        </Wrapper>
    );
}

export default ModifyProfile;