import React from 'react'
import { 
  InvestorsContainer,
  InvestorsWrap,
  InvestorsRow,
  InvestorsCard,
  InvestorsIcon
} from './InvestorsElements'

import investor3 from '../../images/svg/investor3.svg'
import investor4 from '../../images/svg/investor4.svg'
import investor6 from '../../images/svg/investor6.svg'
import investor7 from '../../images/svg/investor7.svg'

const Investors = () => {
  return (
    <InvestorsContainer>
      <InvestorsWrap>
        <InvestorsRow>
          <InvestorsCard>
            <InvestorsIcon src={investor4} />
          </InvestorsCard>
          <InvestorsCard>
            <InvestorsIcon src={investor7} />
          </InvestorsCard>
          <InvestorsCard>
            <InvestorsIcon src={investor3} />
          </InvestorsCard>
          <InvestorsCard>
            <InvestorsIcon src={investor6} />
          </InvestorsCard>
        </InvestorsRow>
      </InvestorsWrap>
    </InvestorsContainer>
  )
}

export default Investors
