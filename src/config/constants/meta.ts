import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BunnyMoonFarm',
  description:
    'The most popular AMM on BSC by user count! Earn BUNNYMOON through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BunnyMoonFarm), NFTs, and more, on a platform you can trust.',
  image: 'https://bunnymoonfarm.web.app/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | BunnyMoonFarm',
  },
  '/competition': {
    title: 'Trading Battle | BunnyMoonFarm',
  },
  '/prediction': {
    title: 'Prediction | BunnyMoonFarm',
  },
  '/farms': {
    title: 'Farms | BunnyMoonFarm',
  },
  '/pools': {
    title: 'Pools | BunnyMoonFarm',
  },
  '/lottery': {
    title: 'Lottery | BunnyMoonFarm',
  },
  '/collectibles': {
    title: 'Collectibles | BunnyMoonFarm',
  },
  '/ifo': {
    title: 'Initial Farm Offering | BunnyMoonFarm',
  },
  '/teams': {
    title: 'Leaderboard | BunnyMoonFarm',
  },
  '/profile/tasks': {
    title: 'Task Center | BunnyMoonFarm',
  },
  '/profile': {
    title: 'Your Profile | BunnyMoonFarm',
  },
}
