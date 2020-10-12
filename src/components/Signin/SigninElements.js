import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 0;
  overflow: hidden;
  background: #005557;
`

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 20px;
  background: #00898b;
  padding: 20px 0;
  border-radius: 4px;
`

export const NavLogoImgContainer = styled.div`
  width: 60px;
  height: 60px;
`

export const NavLogoImg = styled.img`
  width: 100%;
  height: 100%;
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px){
    height: 80%
  }
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
    padding: 10px
  }
`

export const Form = styled.form`
  background: #fbfbfb;
  max-width: 420px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);

  @media screen and (max-width: 400px){
    padding: 32px 32px
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #005557;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #005557;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  outline: none;
  background: #e1e1e1;
  color: #252525;
`

export const FormPasswordToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 32px;
`

export const HideShowPassword = styled.div`
  font-size: 0.8rem;
`

export const FormPasswordToggle = styled.input`
  margin-left: 7px;
  margin-right: 3px;
`

export const FormButton = styled.button`
  background: #005557;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  margin-bottom: 24px;

  &:hover{
    background: #00898b
  }
`

export const Text = styled(LinkRouter)`
  text-align: center;
  color: #005557;
  margin-bottom: 7px;
  font-size: 14px;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
`