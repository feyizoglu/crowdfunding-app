import './globals.css'
import { Inter } from 'next/font/google'

import NavbarLayOut from './Components/NavbarLayout/NavbarLayout'
import { ReduxProvider } from './redux/provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crownfunding App',
  description: 'The project will be created by team 9 in the near future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ReduxProvider>
          <NavbarLayOut />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
