import React from 'react'
import { Card, CardBody, Heading, Text } from '@bunnymoon-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useTotalBurn } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import tokens from 'config/constants/tokens'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const totalBurn = useTotalBurn()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()),9)
  const bunnymoonSupply = totalSupply ? getBalanceNumber(totalSupply,9) - burnedBalance : 0
  const bunnyBurnSupply = totalBurn ? getBalanceNumber(totalBurn,9) : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('BUNNYMOON Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Initial Supply')}</Text>
          <CardValue fontSize="14px" decimals={0} value={1000000000000} fontfamily="Roboto Mono" />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} fontfamily="Roboto Mono" />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Auto Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={bunnyBurnSupply} fontfamily="Roboto Mono" />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Supply')}</Text>
          <CardValue fontSize="14px" decimals={0} value={bunnymoonSupply} fontfamily="Roboto Mono" />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New BUNNYMOON/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={100} fontfamily="Roboto Mono" />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
