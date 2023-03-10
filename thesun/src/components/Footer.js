import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/Footer/implay-logo.png';
import instagram from '../assets/images/Footer/footer-icon-instagram.png';
import kakaotalk from '../assets/images/Footer/footer-icon-kakaotalk.png';
import twitter from '../assets/images/Footer/footer-icon-twitter.png';

const Container = styled.div`
    width: 89%;
    height: 8rem;
    background-color: #122642;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;

    @media ${props => props.theme.tablet} {
        display: none;
    }
`

const LeftContainer = styled.div`
    display:flex;
    align-items: center;
`

const LeftImageContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
`

const LogoImage = styled.img`
    width: 3.5rem;
    margin-bottom: 0.5rem;
`

const LeftTopText = styled.div`
    font-size: 0.5rem;
    color: #ffffff;
    font-weight: 100;
    opacity: 0.7;
    margin-bottom: 0.2rem;
`

const LeftBottomText = styled.div`
    font-size: 0.8rem;
    color: #ffffff;
    font-weight: 400;
    opacity: 0.9;
`

const VerticalLine = styled.div`
    width: 0.05rem;
    height: 6rem;
    background-color: #ffffff;
`

const MiddleContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: flex-start;
`

const MiddleTopText = styled.div`
    font-size: 0.8rem;
    color: #ffffff;
    margin-bottom: 1rem;
    font-weight: 400;
    opacity: 0.7;
`

const MiddleBottomText = styled.div`
    font-size: 0.5rem;
    color: #ffffff;
    white-space: pre-wrap;
    font-weight: 100;
    opacity: 0.7;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

const IconBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
`

const SNSIcon = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
`

const RightText = styled.div`
    font-size: 0.5rem;
    color: #ffffff;
    font-weight: 100;
    opacity: 0.7;
`

function Navbar() {
  return (
    <Container>
        <LeftContainer>
            <LeftImageContainer>
                <LogoImage src={logo}/>
                <LeftTopText>???????????? ????????? ?????? ?????????</LeftTopText>
                <LeftBottomText>????????????</LeftBottomText>
            </LeftImageContainer>
            <VerticalLine/>
        </LeftContainer>
        <MiddleContainer>
            <MiddleTopText>Copyright 2023. ???????????? All pictures cannot be copied without permission. </MiddleTopText>
            <MiddleBottomText>??? ????????? ????????? ?????????????????? '??????(The Son)'??? ?????? ?????? ??????????????? ??????????????????.{'\n'}??? ????????? ??????????????????????????? ???????????? ?????? ?????? ????????? ???????????????.</MiddleBottomText>
        </MiddleContainer>
        <RightContainer>
            <IconBox>
            <SNSIcon src={instagram} onClick={() => window.open('https://www.instagram.com/ewha_implay/', "_blank")}/>
            <SNSIcon src={twitter} onClick={() => window.open('https://twitter.com/ewha_implay', "_blank")}/>
            <SNSIcon src={kakaotalk} onClick={() => window.open('https://open.kakao.com/o/sljJW73e', "_blank")}/>
            </IconBox>
            <RightText>????????? ???????????? ???????????? ????????? ?????? ?????? ????????????????????? ???????????????.</RightText>
        </RightContainer>
    </Container>
  );
}

export default Navbar;
