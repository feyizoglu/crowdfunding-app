import '../globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import NavbarLayOut from './Components/NavbarLayout/NavbarLayout'
import { ReduxProvider } from '../redux/provider'
import { ToastContainer } from 'react-toastify';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Givingly',
  description: 'The project will be created by team 9 in the near future',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <ProjectsContainer>
              <NavbarLayOut />
              {children}
              <Footer />
              <ToastContainer />
            </ProjectsContainer>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

