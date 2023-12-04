import { Raleway } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Game Audio Denmark",
  description: "Game Audio Denmark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
