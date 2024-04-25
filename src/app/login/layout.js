
'use client'

import { useSession } from "next-auth/react"
import { Poppins } from "next/font/google"
import { useEffect } from "react"

const popin = Poppins({subsets:["latin"], display:"swap", weight:["400","600"]})



const LoginLayout = ({children})=>{
    const {status}=useSession()
    useEffect(()=>{
        if(status==="authenticated"){
            location.href="/spd"
        }
    },[])
    
    return(
        <section className={popin.className}>
            {children}
        </section>
    )
}

export default LoginLayout