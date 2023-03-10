import React from 'react';
import styled from 'styled-components';
import SeatIMG from '../../assets/images/Ticket/seats.png';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${props => props.theme.tablet} {
    width: 95%;
  }

  @media ${props => props.theme.mobile} {
    width: auto;
    margin-top: 2rem;
    background-color: #172F53;
  }
`

const TitleBox = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;

  @media ${props => props.theme.mobile} { 
    margin-bottom: 1rem;
  }
`

const BottomContainer = styled.div`
  display:flex;
  margin-top: 3rem;

  @media ${props => props.theme.mobile} { 
    width: 80%;
    flex-direction: column;
    padding-top: 0rem;
    margin: auto auto;
    justify-content: space-evenly;
    align-items: center;
  }
`

const LeftBox = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	font-weight: 100;
  font-size: 1rem;
  color: #ffffff;

  @media ${props => props.theme.mobile} { 
    margin-bottom: 1rem;
  }
`

const ImgBox = styled.img`
	width: 25rem;

  @media ${props => props.theme.tablet} {
		width: 100%;
	}
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

  @media ${props => props.theme.mobile} {
    margin-top: 1rem;
    width: 100%;
    margin-left: 0;
  }
`

const LastSeatBox = styled.div`
	display:flex;

  @media ${props => props.theme.mobile} {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`

const TimeBox = styled.div`
	width: 13rem;
	border-right : solid 2px #ffffff;
	font-size: 1.3rem;
	color: #ffffff;
	font-weight: 400;
	text-align:center;

  @media ${props => props.theme.mobile} { 
    width: 50%;
    font-size: 1.2rem;
  }
`

const LastSeatInfo = styled.div`
	width: 15rem;
	font-size: 1.5rem;
	color: #ffffff;
	font-weight: 700;
	text-align:center;

  @media ${props => props.theme.mobile} { 
    width: 50%;
    font-size: 1.2rem;
  }
`

const BottomText = styled.div`
  @media ${props => props.theme.mobile} { 
    margin-top : 2rem;
    font-size: 0.7rem;
    text-align: justify;
  }
`

function Seats() {

	const lastSeatList = [
		{
			date : '03/09 19:30',
			numOfSeats : 149
		},
		{
			date : '03/10 19:30',
			numOfSeats : 142
		},
		{
			date : '03/11 14:00',
			numOfSeats : 158
		},
		{
			date : '03/11 19:00',
			numOfSeats : 158
		}
	]

  return (
    <Container>
        <TitleBox>| ?????? ????????? |</TitleBox>
        <BottomContainer>
            <LeftBox>
							<ImgBox src={SeatIMG}/>
							???????????? ?????? ?????? ???????????? ?????????.
						</LeftBox>
            <RightBox>
						{lastSeatList.map((item) => (
            	<LastSeatBox>
								<TimeBox>{item.date}</TimeBox>
								<LastSeatInfo>{item.numOfSeats} / 176</LastSeatInfo>
							</LastSeatBox>
        		))}
              <BottomText>
						  * ????????? ?????? ?????? ?????? ?????? ??? ??????????????? ?????? ???????????????.{'\n'}* ?????? ??? MD ????????? ?????? 1?????? ????????? ?????? ??? ?????? ???????????? ??????????????????.{'\n'}* ?????? ????????? ??? ?????? MD??? ????????? ?????? ?????? 20??? ????????? ?????? ????????? ???????????????.
						  </BottomText>
            </RightBox>
        </BottomContainer>
    </Container>
  );
}

export default Seats;