import styled from "styled-components";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#fbfbfb' : '#010606')};
  color: #fff;
  padding: 100px 0;
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 860px; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding:  0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding:  0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.span`
  display: inline-flex;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 36px;
  padding: 4px 24px;
  border: none;
  border-radius: 50px;
  color: ${({ topLineDark }) => (topLineDark ? '#ffffff' : '#005557')};
  background: ${({ topLineDark }) => (topLineDark ? '#005557' : '#00ecf2')};

`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px){
    font-size: 27px
  }
`

export const SubTitle = styled.p`
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`