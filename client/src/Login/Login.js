import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../src/assets/font/font.css";

const Login = () => {
    const Container = styled.div`
        background-color: #F5F6F8;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const Header = styled.h1`
        font-size: 3em;
        font-family: "Pretendard";
    `;

    const Form = styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
            width: 30%;
            height: 50px;
            font-size: 1.2em;
            padding: 12px 0px;
            margin-top: 20px;
            border: 1px solid lightgray;
            border-radius: 4px;
        }

        button {
            background-color: #1E4620;
            color: white;
            font-weight: bold;
            font-family: "Pretendard";
            width: 30%;
            font-size: 1.5em;
            padding: 17px 0px;
            margin-top: 40px;
            border: 1px solid #1E4620;
            border-radius: 4px;
            text-align: center;
            text-decoration: none;

            &:hover {
                cursor: pointer;
            }
        }
    `;

    const Footer = styled.div`
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 20px 0px;
        
        div {
            font-size: 0.9em;
            font-family: "Pretendard";
        }
        
        .link {
            font-size: 0.9em;
            font-family: "Pretendard";
            text-decoration: none;
            color: black;

            &:hover {
                font-weight: bold;
                text-decoration: underline;
                cursor: pointer;
            }
        }
        
    `;
    
    return (
        <div className="Login">
            <Container>
                <Header>로그인</Header>
                <Form>
                    <input name="userId" type="text" placeholder="아이디" />
                    <input name="password" type="password" placeholder="비밀번호" />
                    <button type="button" onClick={() => window.location.href='/'}>로그인</button>
                </Form>
                <Footer>
                    <div>계정이 없으신가요?</div>
                    <Link className="link" to="/join">회원가입하기</Link>
                </Footer>
            </Container>
        </div>
    );
}

export default Login;