'use client'
import { Poppins } from "next/font/google"

const popin = Poppins({subsets:["latin"], display:"swap", weight:["400","600"]})

export default function SpdLayout({children}){
    return(
        <main className={popin.className}>
            {children}
        </main>
    )
}