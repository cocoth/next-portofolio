import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Btn = ({label}) =>{
    const router = useRouter();
    const handlePath = () =>{
        if (router.pathname === "/") {
            
            router.push('/');
        }else{
            router.push('');
        }
    }

    return(
        <>
        <button onClick={handlePath}>{label}</button>
        </>
    );
};

export default Btn;
