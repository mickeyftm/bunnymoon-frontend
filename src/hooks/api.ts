import BigNumber from 'bignumber.js'
import { useEffect, useState, useCallback } from 'react'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarms, useGetApiPrices } from 'state/hooks'
import { getAddress } from 'utils/addressHelpers'
import { Farm } from 'state/types'
import FarmCard, { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'

import {fetchPoolsTotalStaking} from '../state/pools/fetchPools'

/*
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
export const baseUrl = 'https://pancakeswap.info/api'

/* eslint-disable camelcase */

export interface ApiSummaryResponse {
  update_at: string
  data: Map<string, Summary>
}

export interface  Summary{
  liquidity: string
}

export interface Stats {
  tvl: number
}

export const useGetStats = () => {
  const { data: farmsLP } = useFarms()
  const prices = useGetApiPrices()

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      const farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !prices) {
          return farm
        }

        const quoteTokenPriceUsd = prices[getAddress(farm.quoteToken.address).toLowerCase()]
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)

        return { ...farm, liquidity: totalLiquidity }
      })

      return farmsToDisplayWithAPR
    },
    [prices],
  )

  const stats: Stats = {tvl: 0};
  const flist = farmsList(farmsLP)
  flist.forEach((farm) => {
    const liquidityPrice = getBalanceNumber(farm.liquidity, 0)
    stats.tvl += liquidityPrice
  })
  return stats
}
