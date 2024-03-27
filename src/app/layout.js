import { Poor_Story } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const poorStory = Poor_Story({
  subsets: ["latin"],
  weight: "400",
  display:'optional',
});

export const metadata = {
  title: "My-SPD",
  description: "Aplikasi SPD online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="icon" href="/logo_baru.ico" sizes="any" />
      </head>
      <body className={poorStory.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <div className="flex flex-col min-h-min">
      <main className="flex-1"></main>
      <footer className="bg-base-200 text-end text-md p-4">
        Copyright @ 2024 By. Rindra Aniko (Version : 05.00.01)
      </footer>
    </div>
  );
};
