import React, { useState } from 'react'
import {
  Container,
  NavLogo,
  NavLogoImgContainer,
  NavLogoImg,
  FormWrap,
  Form,
  FormLabel,
  FormInput,
  FormPasswordToggleContainer,
  HideShowPassword,
  FormPasswordToggle,
  FormButton,
  FormContent,
  FormH1,
  Text
} from './SigninElements'
import Logo from '../../images/brand/oweis.png'

const Signin = () => {
  const [password, setPassword] = useState(true);

  const handlePassword = () => setPassword(!password);

  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form action="#">
            <NavLogo to="/">
              <NavLogoImgContainer>
                <NavLogoImg src={Logo} />
              </NavLogoImgContainer>
            </NavLogo>
            <FormH1>Welcome back, Login</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type="email" />
            
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type={password ? 'password' : 'text'} />

            <FormPasswordToggleContainer>
              <HideShowPassword>{password ? 'Show' : 'Hide'}</HideShowPassword>
              <FormPasswordToggle type="checkbox" onClick={handlePassword} />
            </FormPasswordToggleContainer>
            
            <FormButton type="submit">Continue</FormButton>
            <Text to="/">Don't have an account? Sign Up</Text>
            <Text to="/">Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default Signin
