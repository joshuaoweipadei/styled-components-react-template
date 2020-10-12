import React from 'react'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './serviceElements'
import Icon1 from '../../images/svg/svg6.svg'
import Icon2 from '../../images/svg/svg5.svg'
import Icon3 from '../../images/svg/svg4.svg'
import Icon4 from '../../images/svg/svg3.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Service</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expernses</ServicesH2>
          <ServicesP>I've found a design that I like, but it doesn't include ecommerce or multilingual features.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Reduce Expernses</ServicesH2>
          <ServicesP>I've found a design that I like, but it doesn't include ecommerce or multilingual features.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Reduce Expernses</ServicesH2>
          <ServicesP>I've found a design that I like, but it doesn't include ecommerce or multilingual features.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Reduce Expernses</ServicesH2>
          <ServicesP>I've found a design that I like, but it doesn't include ecommerce or multilingual features.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services