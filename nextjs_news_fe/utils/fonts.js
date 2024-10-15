import { Merriweather, Lato } from 'next/font/google'
import localFont from 'next/font/local'

export const LatoFonts = localFont({
  src: [
    {
      path: './Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Lato-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ]
})

export const merriweather = Merriweather({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['300', '400', '700', '900']
})

export const lato = Lato({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
  style: 'normal', // Optional if you want to specify font style
  fallback: ['Arial']
})