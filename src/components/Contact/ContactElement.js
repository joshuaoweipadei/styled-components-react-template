import styled from "styled-components";


export const ContactContanier = styled.div`
  background: #fbfbfb;
  display: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

export const ContactWrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  grid-gap: 16px;
  padding: 0 24px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
  }
`

export const ContactSubscribe = styled.form`
  margin-bottom: 80px;
`

export const ContactSubscribeHeader = styled.h1`
  margin-bottom: 60px;
  color: #005557;

  @media screen and (max-width: 480px){
    font-size: 27px;
  }
`

export const ContactSubscribeText = styled.p`
  margin-bottom: 25px;
  color: #838383;
  font-size: 14px;
`

export const ContactSubscribeInput = styled.input`
  height: 55px;
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  outline: none;
  width: 100%;
  max-width: 500px;
  -webkit-box-shadow: 3px 1px 5px 2px #eeeeee;
  -moz-box-shadow: 3px 1px 5px 2px #eeeeee;
  box-shadow: 3px 1px 5px 2px #eeeeee;
`

export const ContactSubscribeBtn = styled.button`
  height: 55px;
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  outline: none;
  margin-top: 20px;
  -webkit-box-shadow: 3px 1px 5px 2px #eeeeee;
  -moz-box-shadow: 3px 1px 5px 2px #eeeeee;
  box-shadow: 3px 1px 5px 2px #eeeeee;
  background: #005557;
  color: #fff;
  display: block;
`

export const ContactForm = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const ContactFormHeader = styled.h1`
  text-align: center;
  color: #005557;

  @media screen and (max-width: 480px){
    font-size: 27px;
  }
`

export const ContactFormField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  grid-gap: 10px;
`

export const ContactFormInput = styled.input`
  height: 45px;
  width: 100%;
  padding: 0 15px;
  border: none;
  outline: none;
  border-radius: 6px;
  background: #eeeeee;
`

export const ContactFormTextarea = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 6px;
  resize: none;
  background: #eeeeee;
`

export const ContactFormSubmitBtn = styled.button`
  margin-top: 20px;
  height: 45px;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  outline: none;
  float: right;
  background: #005557;
  color: #fff;
`