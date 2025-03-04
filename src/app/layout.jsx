import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/nav";
import Footer from "./(components)/footer";
const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "2Review: To Watch To Review",
  description:
    "Trang web review phim của nhóm 2 thực hiện cho đồ án môn học Lập Trình WEB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className="flex flex-col h-full max-h-full">
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
