import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Game Audio Denmark",
  description: "Game Audio Denmark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
