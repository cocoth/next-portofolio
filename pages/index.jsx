/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';
import profile from "../public/img/diyans.png";
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Highlight from '@/components/highlight';
import Navbar from '@/components/navbar';
import Content from '@/components/content';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState();
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Diyan Portofolio</title>
        <link rel="icon" href="./public/favicon.ico" />
      </Head>

      <main className='bg-bg-light bg-no-repeat bg-cover bg-top dark:bg-bg-dark '>

        <section className=" min-h-screen">
          <div className='relative'>
            <Navbar setDarkMode={setDarkMode}></Navbar> 
          </div>
          <div className='min-h-screen pb-56 flex items-center justify-center text-center'>
            <div >
              <div className='relative bg-gradient-to-b from-orange-600 dark:bg-gradient-to-b dark:from-blue-700  rounded-full w-40 h-40 mx-auto overflow-hidden mb-3 md:w-60 md:h-60 lg:w-80 lg:h-80' >
                <Image  src={profile} alt='profile' layout='fill' objectFit='cover' />
              </div>
              <div className='backdrop-blur-md shadow-md rounded-lg mb-12 border'>
                <h2 className=' font-ubuntu text-5xl font-bold shadow-sm text-white'>
                  Saeful Diyan Pratama
                </h2>
                <h3 className='text-xl my-2 bg-black text-gray-300 font-mono backdrop-blur-lg dark:bg-black dark:text-gray-300 rounded-md w-80 mx-auto '>
                  I'm a{' '}
                  <TypeAnimation
                  sequence={[
                    "Programmer🚀", 1000,
                    "Penetration Tester🔐", 1000,
                    "Python developer🐍", 1000,
                    "Web developer🌐", 1000
                  ]}
                  wrapper='span' speed={20} repeat={Infinity} className='font-bold font-mono text-xl text-green-600 dark:text-cyan-400 dark:bg-black  bg-blend-multiply rounded-md '/>
                </h3>
              </div>
              <div className='flex text-center justify-center'>
                <h4 className='px-2 text-2xl animate-bounce duration-300 font-bold text-white bg-black hover:bg-blue-600 hover:text-black hover:transition hover:ease-in-out shadow-md rounded-md font-ubuntu cursor-pointer'>
                  <a href="#about" className='shadow-xl'>About me?</a>
                </h4>
              </div>
            </div>
          </div>
          <div className=' py-3'></div>
          <div className=''>
            <div className=' bg-cover min-h-screen' id='about'>
              <div className='bg-gray-950 dark:bg-transparent mt-5 w-full px-10 py-10 gap-3  text-center align-middle items-center justify-center shadow-md backdrop-blur-sm  sm:text-center sm:align-middle md:text-left lg:text-left'>
                <p className='text-2xl px-5 leading-8 text-gray-300 border border-slate-800 rounded-xl  dark:text-gray-300'>
                <Highlight>Greetings! </Highlight>I'm an adept Penetration Tester and Developer,
                  fluent in Python, Bash, and crafting secure digital realms. With <Highlight>React, Tailwind CSS, HTML, CSS, and JS, </Highlight>
                  I sculpt interactive web experiences. Currently leveling up in Golang for new horizons.
                </p>
                <p className='text-2xl mt-4 px-5 leading-8 text-gray-300 border border-slate-800 rounded-xl  dark:text-gray-300'>
                  As an <Highlight>leader of Cyber Kampus community</Highlight>, I've honed my cybersecurity skills through hands-on experiences in red teaming and blue teaming.
                  Proficient in Python and web programming, I identify vulnerabilities and recommend secure solutions. My commitment to learning and collaborative teamwork makes me a versatile asset.
                </p>
                <div className='text-5xl flex justify-center gap-16 pt-10 text-sky-600 '>
                  <a href="https://twitter.com/ZiziUnderTheSea" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle className='cursor-pointer hover:text-blue-600 hover:transition hover:ease-in-out hover:ring-1   dark:text-blue-500 dark:bg-white  dark:rounded-full' />
                  </a>
                  <a href='https://www.linkedin.com/in/diyan-pratama/' target='_blank' rel="noopener noreferrer">
                    <AiFillLinkedin className='cursor-pointer hover:text-blue-600 hover:transition hover:ease-in-out hover:ring-1 dark:text-blue-500 dark:bg-white  dark:rounded-full'/>
                  </a>
                </div>
              </div>

              <div className='mt-5'>
                <Content/>
              </div>

            </div>
          </div>
          
        </section>
        <footer className='bg-gray-900 mt-3'>
          <h1 className='text-sm text-white text-center font-poppins font-semibold p-3'>
            &copy; copyright Diyan All rights reserved
          </h1>
        </footer>

      </main>

    </div>

  )
}
