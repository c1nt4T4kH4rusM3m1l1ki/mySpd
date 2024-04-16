
'use client'

import { Poppins } from "next/font/google"

const popin = Poppins({subsets:["latin"], display:"swap", weight:["400","600"]})
const LoginLayout = ({children})=>{
    return(
        <section className={popin.className}>
            {children}
        </section>
    )
}

export default LoginLayout