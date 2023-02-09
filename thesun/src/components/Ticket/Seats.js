import React from 'react';
import styled from 'styled-components';
import SeatIMG from '../../assets/images/Ticket/seats.png';

const Container = styled.div`
  width:100%;
  display:flex;
	flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;
`

const TitleBox = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
`

const BottomContainer = styled.div`
  display:flex;
  margin-top: 3rem;

`

const LeftBox = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	font-weight: 100;
  font-size: 1rem;
  color: #ffffff;
`

const ImgBox = styled.img`
	width: 25rem;
`

const RightBox = styled.div`
	width: 30rem;
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-left: 3rem;
	white-space: pre-wrap;
	margin-top: 1.5rem;

	font-size: 0.8rem;
	color: #ffffff;
	font-weight: 100;
	line-height: 180%;
`

const LastSeatBox = styled.div`
	display:flex;
`

const TimneBox = styled.div`
	width: 13rem;
	border-right : solid 2px #ffffff;
	font-size: 1.3rem;
	color: #ffffff;
	font-weight: 400;
	text-align:center;
`

const LastSeatInfo = styled.div`
	width: 15rem;
	font-size: 1.5rem;
	color: #ffffff;
	font-weight: 700;
	text-align:center;
`

function Seats() {

	const lastSeatList = [
		{
			date : '03/09 19:30',
			numOfSeats : 196
		},
		{
			date : '03/10 19:30',
			numOfSeats : 196
		},
		{
			date : '03/11 14:00',
			numOfSeats : 196
		},
		{
			date : '03/11 19:00',
			numOfSeats : 196
		}
	]

  return (
    <Container>
        <TitleBox>| 좌석 배치도 |</TitleBox>
        <BottomContainer>
            <LeftBox>
							<ImgBox src={SeatIMG}/>
							잔여석은 매일 자정 업데이트 됩니다.
						</LeftBox>
            <RightBox>
						{lastSeatList.map((item) => (
            	<LastSeatBox>
								<TimneBox>{item.date}</TimneBox>
								<LastSeatInfo>{item.numOfSeats} / 196</LastSeatInfo>
							</LastSeatBox>
        		))}
						* 좌석은 공연 당일 티켓 배부 시 선착순으로 선택 가능합니다.{'\n'}* 티켓 및 MD 배부는 공연 1시간 전부터 극장 앞 티켓 박스에서 이루어집니다.{'\n'}* 당일 잔여석 및 잔여 MD에 한하여 공연 시작 00분 전까지 현장 예매가 가능합니다.
						</RightBox>
        </BottomContainer>
    </Container>
  );
}

export default Seats;