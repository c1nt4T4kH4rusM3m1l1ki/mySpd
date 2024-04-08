
'use client'
import { useLogOut } from "@/lib/hook"
import { Poppins } from "next/font/google"

const popin = Poppins({subsets:["latin"], display:"swap", weight:["400","600"]})
const LoginLayout = ({children})=>{
    useLogOut()
    return(
        <section className={popin.className}>
            {children}
        </section>
    )
}

export default LoginLayout