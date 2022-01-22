import React from 'react';
import style from './Join.module.css';

const Join = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;

    return (
        <div className="Wrapper">
           <div className={style.container}>
               <h1 className={style.joinHeader}>회원가입</h1>
               <form className={style.joinForm}>
                   {/* 필수입력 그룹 */}
                   <div className={style.rowGroup}>
                        <div className={style.joinRow}>
                            <div className={style.joinTitle}>아이디</div>
                            <input className={style.joinInput} name="userId" type="text" title="필수입력"/>
                        </div>
                        <div className={style.joinRow}>
                            <div className={style.joinTitle}>비밀번호</div>
                            <input className={style.joinInput} name="password" type="password" title="필수입력"/>
                        </div>
                        <div className={style.joinRow}>
                            <div className={style.joinTitle}>이름</div>
                            <input className={style.joinInput} name="userName" type="text" title="필수입력"/>
                        </div>
                        <div className={style.joinRow}>
                            <div className={style.joinTitle}>한 줄 소개</div>
                            <input className={style.joinInput} name="userInfo" type="text" placeholder="경력을 포함한 한 줄 소개" title="필수입력"/>
                        </div>
                    </div>

                    {/* 선택입력 그룹 */}
                    <div className={style.rowGroup}>
                        <div className={style.msg}>선택입력</div>
                        <div className={style.joinRow}>
                            <div className={style.joinTitle}>생년월일</div>
                            <input className={style.joinInput} name="birth" type="date" max={dateString} title="선택입력"/>
                        </div>
                        <div className={style.joinRow}>
                            <div className={style.joinTitle}>성별</div>
                            <select className={style.joinInput} id={style.gender} name="gender" title="선택입력">
                                <option value selected>성별</option>
                                <option value="M">남자</option>
                                <option value="F">여자</option>
                            </select>
                        </div>
                        <div className={style.joinRow}>
                            <div className={style.joinTitle} title="선택입력">프로필 사진</div>
                            <input className={style.joinInput} name="profileImg" type="file" />
                        </div>
                    </div>

                    {/* 버튼 */}
                    <button className={style.joinButton} type="button">가입하기</button>
               </form>
           </div>
        </div>
    );
}

export default Join;