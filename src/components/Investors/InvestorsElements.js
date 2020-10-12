import styled from "styled-components";


export const InvestorsContainer = styled.div`
  background: #fbfbfb;
`

export const InvestorsWrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`

export const InvestorsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 15px;
  margin: 0;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
`

export const InvestorsCard = styled.div`
  width: 100%;
  height: 140px;
  padding: 10px;
`

export const InvestorsIcon = styled.img`
  width: 100%;
  height: 100%;
`