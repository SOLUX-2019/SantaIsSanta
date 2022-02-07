import React, { useState } from 'react';
import { Container, Header, Form, Footer } from './styledLogin';
import Axios from 'axios';
import { Link } from "react-router-dom";
import "../../src/assets/font/font.css";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
       Axios.post('/api/user/login', {
           id: id,
           password: password
       })
       .then((res) => {
           if(res.data.loginSuccess) {
               alert('산타는산타에 오신 것을 환영합니다!');
               window.location.href = '/';
           }
           else {
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
                    <input name="userId" type="text" placeholder="아이디" onChange={(e)=> setId(e.target.value)}/>
                    <input name="password" type="password" placeholder="비밀번호" onChange={(e)=> setPassword(e.target.value)}/>
                    <button type="button" onClick={submit}>로그인</button>
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


//     const onSubmitHandler = (event) =>{
//         event.preventDefault()

//         const id = document.getElementById("userId");
//         const password = document.getElementById('password')

//         Axios({
//             method:"POST",
//             url: 'http://localhost:5000/api/user/login',
//             data: {
//                 id: id.value,
//                 password: password.value
//             }
//         })
//         .then((res)=>{
//             console.log(3)
//             var login = res.data.loginSuccess
//             if(login){
//                 window.location.href='/'
//             }
//         }).catch(error=>{
//             console.log(error);
//             throw new Error(error);
//         });
//     }
    
//     return (
//         <div className="Login">
//             <Container>
//                 <Header>로그인</Header>
//                 <Form onSubmit={onSubmitHandler}>
//                     <input id="userId" type="text" placeholder='아이디' />
//                     <input id="password" type="password" placeholder='비밀번호' />
//                     <button type="submit">로그인</button>
//                 </Form>
//                 <Footer>
//                     <div>계정이 없으신가요?</div>
//                     <Link className="link" to="/join">회원가입하기</Link>
//                 </Footer>
//             </Container>
//         </div>
//     );
// }