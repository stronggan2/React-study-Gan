import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import logo from '../../assets/icon/logo.PNG';
import { getScaledFontSizePixel, getScaledWidthPixel } from '../../lib/scale';
import { colors } from '../../lib/colors';
import CustomText from '../../components/common/Text/CustomText';
import { Input } from '@mui/material';

const S = {
  GlobalContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100vh;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  MenuContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Logo: styled.img`
    width: ${getScaledWidthPixel(360)};
    height: ${getScaledWidthPixel(180)};
  `,
  Menu: styled(CustomText)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${getScaledWidthPixel(250)};
    font-size: ${getScaledFontSizePixel(20)}
    color: ${colors.gray800}
  `,
  UserContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background-color: #F8F8F8;
  `,
};

const HomeContainer = () => {

  return (
    <S.GlobalContainer>
      <S.Header>
        <S.MenuContainer>
        <S.Logo src={logo}></S.Logo>
        <S.Menu>대시보드</S.Menu>
        <S.Menu>블록</S.Menu>
        <S.Menu>트랜잭션</S.Menu>
        <S.Menu>노드</S.Menu>
        <S.Menu>서비스</S.Menu>
        </S.MenuContainer>
        <S.UserContainer>
          <Input></Input>
          <div>검색</div>
          <div>사용자</div>
        </S.UserContainer>
      </S.Header>
    </S.GlobalContainer>
  );
};

export default HomeContainer;
