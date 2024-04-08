import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react"


export const useLogin = ()=>{
    const {session, status}= useSession();
    const route = useRouter()
    useEffect(()=>{
        if(status === 'unauthenticated'){
            route.push('/login')
        }
    },[session, route, status])
}

export const useLogOut = ()=>{
    const {session, status}= useSession();
    const route = useRouter()
    useEffect(()=>{
        if(status === 'authenticated'){
            route.push('/')
        }
    },[session, route, status])
}