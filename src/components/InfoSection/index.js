import React from 'react'
import { Button } from '../ButtonElements'
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements'

const InfoSection = ({ id, lightBg, imgStart, topLine, topLineDark, lightText ,headline, darkText, description, buttonLabel, img, alt, primary, dark, dark1 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine topLineDark={topLineDark}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button 
                    to="home"
                    smooth="true"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark1={dark1 ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
