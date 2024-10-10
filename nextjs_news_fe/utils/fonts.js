import { Merriweather, Lato } from 'next/font/google'

export const merriweather = Merriweather({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['300', '400', '700', '900']
})

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900']
})