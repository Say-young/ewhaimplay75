import React from 'react';
import styled from 'styled-components';
import ExampleIMG from '../../assets/images/Ticket/ticket_example.png';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleBox = styled.div`
    font-weight: 700;
    font-size: 2rem;
    color: #ffffff;
    white-space: pre-wrap;
    text-align:center;
    line-height: 170%;
`

const MiddleBox = styled.div`
    display:flex;
    margin: 3rem auto;
`

const MiddleContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 25rem;
`

const LeftIMGBOx = styled.img`
    width: 12rem;
    margin-bottom: 2rem;
`

const LeftTextBox = styled.div`
    font-weight: 100;
    font-size: 0.8rem;
    color: #ffffff;
`

const RightTitle = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    color: #ffffff;
`

const RightMiddle = styled.div`
    margin: 1.5rem 0;
    font-weight: 700;
    font-size: 1.3rem;
    color: #ffffff;
    white-space: pre-wrap;
    line-height: 200%;
`

const RightBottom = styled.div`
    font-weight: 100;
    font-size: 0.7rem;
    color: #ffffff;
    white-space: pre-wrap;
    line-height: 150%;
`

const BottomBox = styled.div`
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
`
function Information() {
  return (
    <Container>
        <TitleBox>2월 17일{'\n'}예매 폼 및 MD 정식 오픈</TitleBox>
        <MiddleBox>
            <MiddleContainer style={{'alignItems' : 'center'}}>
                <LeftIMGBOx src={ExampleIMG}/>
                <LeftTextBox>티켓 디자인은 2월 17일에 공개됩니다.</LeftTextBox>
            </MiddleContainer>
            <MiddleContainer>
                <RightTitle>| 재관람 혜택 |</RightTitle>
                <RightMiddle>2회 관람 시 | 1000원 할인 or 굿즈 1종{'\n'}3회 관람 시 | 2000원 할인 or 굿즈 2종{'\n'}4회 관람 시 | 티켓 1매 추가 증정 </RightMiddle>
                <RightBottom>* 관람하신 공연의 티켓을 지참하신 경우에만 가능합니다.{'\n'}* X회 관람 시 증정하는 MD는 현장에서 수령 가능합니다.{'\n'}* X회 관람 시 적용되는 할인 혜택은 현장에서 페이백 해드립니다.</RightBottom>
            </MiddleContainer>
        </MiddleBox>
        <BottomBox>1매 6,000원</BottomBox>
    </Container>
  );
}

export default Information;