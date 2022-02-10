import React, { useState, useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import { Container, Header, Form, Footer } from "./styledLogin";
import "../../src/assets/font/font.css";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { setLoginInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const submit = () => {
    Axios.post("/api/user/login", {
      id: id,
      password: password,
    })
      .then((res) => {
        if (res.data.loginSuccess) {
          setLoginInfo(true, id);
          alert("산타는산타에 오신 것을 환영합니다!");
          navigate("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <Container>
        <Header>로그인</Header>
        <Form>
          <input
            name="userId"
            type="text"
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={submit}>
            로그인
          </button>
        </Form>
        <Footer>
          <div>계정이 없으신가요?</div>
          <Link className="link" to="/join">
            회원가입하기
          </Link>
        </Footer>
      </Container>
    </div>
  );
};

export default Login;