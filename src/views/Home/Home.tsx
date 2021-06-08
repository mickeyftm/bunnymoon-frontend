import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@bunnymoon-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/bunnymoon/bg-mobile.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/bunnymoon/bg-left.png'), url('/images/bunnymoon/bg-right.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }

`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {t('BunnyMoonFarm')}
        </Heading>
        <Text>{t('BunnyMoonFarm on Binance Smart Chain.')}</Text>
      </Hero>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </div>
  )
}

export default Home
