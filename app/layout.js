import { Raleway, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Game Audio Denmark",
  description: "Game Audio Denmark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${roboto_mono.variable}`}>
      <body className={`${raleway.className} body`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
