import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import Footer from "./(components)/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "2Review: To Watch To Review",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={mont.className}
      
      >
        <div className="flex flex-col h-screen max-h-screen">
          <div className="bg-nav">
            <Nav></Nav>
          </div>
          <div className="flex-grow overflow-y-auto bg-default-text text-black-text">
            {children}
            <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  );
}
