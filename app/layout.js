import "./globals.css";
import { Oswald } from "next/font/google";

import NavbarLayOut from "./Components/NavbarLayout/NavbarLayout";
import { ReduxProvider } from "./redux/provider";
import { ToastContainer } from "react-toastify";
import ProjectsContainer from "./Components/ProjectsContainer/ProjectsContainer";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";

const oswald = Oswald({
  subsets: ["latin"],
});

export const metadata = {
  title: "Givingly",
  description: "The project will be created by team 9 in the near future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ReduxProvider>
          <ProjectsContainer>
            <NavbarLayOut />
            {children}
            <Footer />
            <ToastContainer />
          </ProjectsContainer>
        </ReduxProvider>
      </body>
    </html>
  );
}
