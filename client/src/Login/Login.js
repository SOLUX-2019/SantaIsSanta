import React from 'react';
import style from './Login.module.css';

const Login = () => {
    return (
        <div className="Wrapper">
            <div className={style.container}>
                <h1 className={style.loginHeader}>로그인</h1>
                <form className={style.loginForm}>
                    <input className={style.loginInput} name="userId" type="text" placeholder="아이디" />
                    <input className={style.loginInput} name="password" type="password" placeholder="비밀번호" />
                    <button className={style.loginButton} type="button">로그인</button>
                </form>
                <div className={style.loginFooter}>
                    <div className={style.footerMsg}>계정이 없으신가요?</div>
                    <div className={style.footerLink}>회원가입하기</div>
                </div>
            </div>
        </div>
    );
}

export default Login;