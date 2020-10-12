import React from 'react'
import { 
  AboutUsContainer,
  AboutUsWrap,
  AboutUsWrapper,
  AboutUsHeader,
  AboutUsSubTitle,
  AboutUsSubTitleText,
  AboutUsCard,
  AboutUsIcon,
  AboutUsContent,
  AboutUsH1,
  AboutUsP
} from './AboutUsElements'
import Icon1 from '../../images/svg/svg7.svg'
import Icon2 from '../../images/svg/svg9.svg'
import Icon3 from '../../images/svg/svg13.svg'

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
      <AboutUsWrap>
        <AboutUsHeader>About Us</AboutUsHeader>
        <AboutUsSubTitle>WE CREATE AWESOME STUFF</AboutUsSubTitle>
        <AboutUsSubTitleText>
          Claritas est etiam processus dynamicus, 
          qui sequitur mutationem consuetudium lectorum. 
          Mirum est notare quam littera gothica, quam nunc 
          putamus parum
        </AboutUsSubTitleText>
        <AboutUsWrapper>
          <AboutUsCard>
            <AboutUsIcon src={Icon1} />
            <AboutUsContent>
              <AboutUsH1>Web Development</AboutUsH1>
              <AboutUsP>
                Ales, quam vitae gravida interdum, ex mi bibendum enim, 
                sit amet tristique mi quam vel odio. Donec non nunc 
                condimentum.drerit elit sed, condimentum magna. Suspendisse 
                imperdiet purus vel drerit elit sed, condimentum magna. 
                Suspendisse imperdiet purus vel
              </AboutUsP>
            </AboutUsContent>
          </AboutUsCard>
          <AboutUsCard>
            <AboutUsIcon src={Icon2} />
            <AboutUsContent>
              <AboutUsH1>Internet Marketing</AboutUsH1>
              <AboutUsP>
                Ales, quam vitae gravida interdum, ex mi bibendum enim, 
                sit amet tristique mi quam vel odio. Donec non nunc 
                condimentum.drerit elit sed, condimentum magna. Suspendisse 
                imperdiet purus vel drerit elit sed, condimentum magna. 
                Suspendisse imperdiet purus vel
              </AboutUsP>
            </AboutUsContent>
          </AboutUsCard>
          <AboutUsCard>
            <AboutUsIcon src={Icon3} />
            <AboutUsContent>
              <AboutUsH1>Content Advertising</AboutUsH1>
              <AboutUsP>
                Ales, quam vitae gravida interdum, ex mi bibendum enim, 
                sit amet tristique mi quam vel odio. Donec non nunc 
                condimentum.drerit elit sed, condimentum magna. Suspendisse 
                imperdiet purus vel drerit elit sed, condimentum magna. 
                Suspendisse imperdiet purus vel
              </AboutUsP>
            </AboutUsContent>
          </AboutUsCard>
        </AboutUsWrapper>
      </AboutUsWrap>
    </AboutUsContainer>
  )
}

export default AboutUs
