import styled from "styled-components";

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fbfbfb;
  padding: 100px 0;
`

export const AboutUsWrap = styled.div`
  margin: 0;
  max-width: 1100px;
  padding: 0 24px;
`

export const AboutUsHeader = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (max-width: 480px){
    font-size: 30px;
  }
`

export const AboutUsSubTitle = styled.p`
  text-align: center;
  margin-bottom: 15px;
  color: #00898b;
  font-weight: 600;
`

export const AboutUsSubTitleText = styled.p`
  text-align: center;
  margin: auto;
  max-width: 600px;
  font-size: 12px;
  color: #838383;
`

export const AboutUsWrapper = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 15px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
  }
`

export const AboutUsCard = styled.div`
  display: flex;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;

  @media screen and (max-width: 480px){
    flex-direction: column;
  }
`

export const AboutUsIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-right: 10px;
`

export const AboutUsContent = styled.div`
  padding: 0 10px;
`

export const AboutUsH1 = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 35px;
  text-transform: uppercase;
`

export const AboutUsP = styled.p`
  font-size: 12px;
  font-weight: 200;
  line-height: 2em;
  letter-spacing: 0.12em;
  color: #838383;
`