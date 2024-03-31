import { Poor_Story } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const poorStory = Poor_Story({
  subsets: ["latin"],
  weight: "400",
  display: "optional",
});

export const metadata = {
  title: "My-SPD",
  description: "Aplikasi SPD online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
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
    <footer>
      <div className="relative">
        <div className="fixed bottom-0 right-5 h-10 text-base text-cyan-800">
          <span>Copyright @ 2024 By. Rindra Aniko (Version : 05.00.01)</span>
        </div>
      </div>
    </footer>
  );
};
