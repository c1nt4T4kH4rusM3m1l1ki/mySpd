'use client'

import { SessionProvider } from "next-auth/react";
import Navbar from "./navbar";
import Footer from "./Footer"; // Asumsi Footer dipindah ke file terpisah
import 'tailwindcss/tailwind.css';
import { Poor_Story } from "next/font/google";

const poorStory = Poor_Story({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});// Asumsi Anda menggunakan CSS Modules

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
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );}
