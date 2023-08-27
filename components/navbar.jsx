import React, {
    useState, 
    useEffect
    } from "react";
import { 
        BsFillMoonStarsFill,
        BsFillSunFill,
        BsFillEnvelopeAtFill
    } from "react-icons/bs";
import {useTheme} from "next-themes";
import { useRouter } from "next/router";
import Btn from "@/components/btn";
import Link from "next/link";


const updateLabel = (router, setLabel) =>{
    if (router.pathname === "/resume") {
        setLabel("Home");
    }else{
        setLabel("Resume");
    }
}

const Navbar = () =>{
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);
    const [btnLabel, setBtnLabel] = useState("Resume");
    const {systemTheme,theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        updateLabel(router, setBtnLabel)
    }, [router, router.pathname]);

    return(
        <div>
            <nav className="py-2  mx-4 flex justify-between ">
                <h1 className='text-2xl my-auto text-emerald-50 font-poppins font-bold dark:text-blue-200'>
                Diyan <span className='text-orange-400 dark:text-cyan-400'>profile</span>
                </h1>
                <ul className='flex items-center gap-7'>
                    <li>
                        {currentTheme == 'dark' ? (
                            <BsFillMoonStarsFill onClick={()=> setTheme('light')} className='cursor-pointer text-2xl text-sky-500 dark:text-yellow-600'/>
                        ): (<BsFillSunFill onClick={()=> {setTheme('dark')}}  className='cursor-pointer text-2xl text-orange-500 dark:text-cyan-600'/>)} 
                    </li>
                    <li className={`bg-gradient-to-r from-orange-400 to-orange-600 dark:from-sky-400 dark:to-sky-600 text-white p-2 rounded-md cursor-pointer font-poppins`} >
                        {/* <Btn label={btnLabel} /> */}
                        <Link href="mailto:business.saefulpratama@gmail.com">
                            <BsFillEnvelopeAtFill className="text-2xl"/>
                        </Link>
                        {/* <a className={`${isActive('/resume')}`} href=""></a> */}
                    </li>
                </ul>
            </nav>  
        </div>
    )
}
export default Navbar;