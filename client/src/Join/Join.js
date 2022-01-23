import React from 'react';
import { Wrapper, Container, Header, Form, RowGroup, Row, Title, Input, Select, Button } from './styledJoin';

const Join = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;

    return (
        <Wrapper>
           <Container>
               <Header>회원가입</Header>
               <Form>
                   {/* 필수입력 그룹 */}
                   <RowGroup>
                        <Row>
                            <Title>아이디</Title>
                            <Input name="userId" type="text" title="필수입력"/>
                        </Row>
                        <Row>
                            <Title>비밀번호</Title>
                            <Input name="password" type="password" title="필수입력"/>
                        </Row>
                        <Row>
                            <Title>이름</Title>
                            <Input name="userName" type="text" title="필수입력"/>
                        </Row>
                        <Row>
                            <Title>한 줄 소개</Title>
                            <Input name="userInfo" type="text" placeholder="경력을 포함한 한 줄 소개" title="필수입력"/>
                        </Row>
                    </RowGroup>

                    {/* 선택입력 그룹 */}
                    <RowGroup>
                        <div>선택입력</div>
                        <Row>
                            <Title>생년월일</Title>
                            <Input name="birth" type="date" max={dateString} title="선택입력"/>
                        </Row>
                        <Row>
                            <Title>성별</Title>
                            <Select name="gender" title="선택입력">
                                <option value selected>성별</option>
                                <option value="M">남자</option>
                                <option value="F">여자</option>
                            </Select>
                        </Row>
                        <Row>
                            <Title title="선택입력">프로필 사진</Title>
                            <Input name="profileImg" type="file" />
                        </Row>
                    </RowGroup>

                    {/* 버튼 */}
                    <Button type="button">가입하기</Button>
               </Form>
           </Container>
        </Wrapper>
    );
}

export default Join;