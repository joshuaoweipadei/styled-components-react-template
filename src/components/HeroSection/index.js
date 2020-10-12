import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'
import { Button } from '../ButtonElements'
import ScrollAnimation from 'react-animate-on-scroll';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover);
  }
  
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ScrollAnimation animateIn='bounce' duration={5} initiallyVisible={true}>
          <HeroH1>IT Solutions for Your Business</HeroH1>
        </ScrollAnimation>
        <ScrollAnimation animateIn='flipInY' animateOut='flipOutY' animateOnce={true}>
          <HeroP>
            Since our establishment, we have been  delivering high-quality
            and substainable Full Stack software solutions for corporate
            business purposes.
          </HeroP>
        </ScrollAnimation>
        <HeroBtnWrapper>
          <Button
            to="/" 
            smooth="true"
            duration={500}
            spy="true"
            exact="true"
            offset={-80}
          >
            Learn More <ArrowRight />
          </Button>
          <Button
            to="/" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth="true"
            duration={500}
            spy="true"
            exact="true"
            offset={-80}
          >
            Register Account {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
