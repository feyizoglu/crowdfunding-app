import './globals.css'
import { Inter } from 'next/font/google'

import NavbarLayOut from './Components/NavbarLayout/NavbarLayout'
import { ReduxProvider } from './redux/provider'
import { ToastContainer } from 'react-toastify';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Givingly',
  description: 'The project will be created by team 9 in the near future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ReduxProvider>
          <ProjectsContainer>
            <NavbarLayOut />
            {children}
            <div className="h-[300px] grid place-content-center bg-greenColor">
              Footer section will be here!
            </div>
            <ToastContainer />
          </ProjectsContainer>
        </ReduxProvider>
      </body>
    </html>
  )
}