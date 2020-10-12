import styled from "styled-components";


export const TestimonialContainer = styled.div`
  padding: 100px 0;
  background: #016060;
`

export const TestimonialWrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 0 24px;
`

export const TestimonialH1 = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 34px;

  @media screen and (max-width: 480px){
    font-size: 27px;
  }
`

export const TestimonialRow = styled.div`
  padding: 20px 0;
  transition: all 0.2s ease-in-out;   

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const TestimonialImgContainer = styled.div`
  width: 210px;
  height: 210px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  overflow: hidden;
  margin: auto;
  border: 1.2px solid rgb(145, 185, 185);
  -webkit-box-shadow: 0 1px 3px rgba(145, 185, 185, 0.6);
  -moz-box-shadow: 0 1px 3px rgba(145, 185, 185, 0.6);
  box-shadow: 0 1px 3px rgba(145, 185, 185, 0.6);

  @media screen and (max-width: 480px){
    width: 170px;
    height: 170px;
  }
`

export const TestimonialImg = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const TestimonialContent = styled.div`
  margin-top: -8%;
  width: 100%;
  padding: 9% 5% 8% 5%;
  border-radius: 6px;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  background: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(145, 185, 185, 0.6);
  -moz-box-shadow: 0 1px 3px rgba(145, 185, 185, 0.6);
  box-shadow: 0 1px 3px rgba(145, 185, 185, 0.6);

  @media only screen and (max-width: 934px){
    margin-top: -15%;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 16%;
    padding-bottom: 12.5%;
    padding-left: 5%;
    padding-right: 5%;
    border: 1px solid #ddd;
  }

  @media only screen and (max-width: 480px){
    margin-top: -25%;
    padding-top: 26%;
  }
`

export const TestimonialContentH3 = styled.h3`
  color: #222;
  letter-spacing: 0.7px;
  margin-bottom: 8px;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 20px;
`

export const TestimonialContentH4 = styled.h4`
  text-transform: uppercase;
  margin-top: 0;
  padding-top: 0;
  font-weight: 300;
  color: #838383;
  font-size: 14px;
  margin-bottom: 40px;
`

export const TestimonialContentP = styled.p`
  font-weight: 300 !important;
  line-height: 29px !important;
  color: #838383;
  font-size: 16px;

  :before{
    content: "“";
    color: #00ecf2;
    font-size: 46px;
    font-family: monospace;
    font-weight: 300;
  }

  /* :after{
    content: "”";
    color: green;
    font-size: 26px;
    font-family: monospace;
    font-weight: 100;
    line-height: 0;
  } */
`