import React, { useState } from 'react';

const Prac03 = () => {
    var [message, setMessage] = useState('안녕하세요');
    
    function login(){
        setMessage('로그인되었습니다.');
    }

    function logout(){
        setMessage('로그아웃되었습니다.');
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={login}>로그인</button>
            <button onClick={logout}>로그아웃</button>

        </div>
    );
};

export default Prac03;