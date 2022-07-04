import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Upward from '../static/upward-arrow.png'
import message from '../static/message.png'
import twitter from '../static/twitter.png'
import linkedin from '../static/linkedin.png'

const footer = () => {
    return (
        <div className="masterContainer relative text-slate-400 bg-slate-900 font-gothamnarrow-light py-16 bg-[url('https://betalectic.com/utouch/img/clouds.png')]">
            <div className="w-full md:w-3/4 flex flex-wrap px-4 mx-auto justify-center">
                <div className="firstsection w-full  md:w-5/12 pr-4 ">
                    <div className='font-gothamnarrow-black text-5xl mb-8 text-white'>Betaelectic</div>
                    <p className="font-bold leading-snug">We think beta version of an idea makes or breaks an entrepreneur. That is what we intend to deliver – a minimum viable product, developed on ‘ship-centric’ principles.</p>
                    <p className="font-bold leading-snug mt-2">In world of open source software, saas and innumerable technology stacks – we figure out what is best for your product (cost wise, development wise, scaling wise) and give you the beta.</p>
                    <p className="mt-8 font-bold">
                        <Link href="/"><a className='text-white'>Learn more about Betaelectic</a></Link>
                    </p>

                </div>
                <div className="secondsection w-full ml-auto pt-2 Um=d:w-2/12">
                    <div className="heading font-gothamnarrow-black text-2xl mb-8 text-white">
                        Useful Links
                    </div>
                    <ul className='font-bold'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="thirdsection ml-auto w-full pt-2 md:w-3/12">
                    <div className="heading font-gothamnarrow-black text-2xl mb-8 text-white">Contact us</div>
                    <div className="font-bold flex align-middle">

                        <div className="w-7 h-7 inline-block relative rounded-full mr-1">
                            <Image alt='pic' src={message} className="rounded-full" layout='fill' objectFit='cover' />
                        </div>

                        <div className="flex-1">contact@betaelectic.com</div></div>
                    <div className="font-bold flex align-middle">follow us
                            <Link href="/">
                                <a>
                                    <div className="w-7 h-7 inline-block relative rounded-full mr-1">
                                        <Image alt='pic'  src={"https://img.icons8.com/color/48/000000/linkedin.png"} className="rounded-full" layout='fill' objectFit='cover' />
                                    </div>
                                </a>
                            </Link>
                            <Link  href="/">
                                <a>
                                    <div className="w-7 h-7 inline-block relative rounded-full mr-1">
                                        <Image  alt='pic' src={"https://img.icons8.com/color/48/000000/twitter-squared.png"} className="rounded-full" layout='fill' objectFit='cover' />
                                    </div>
                                </a>
                            </Link>
                       
                    </div>
                </div>
            </div>
            <Link href="/">
                <a>
                    <div className="w-16  h-16 hover:shadow-lg hover:shadow-blue-700  rounded-full absolute -bottom-7 left-1/2 -translate-x-1/3">
                        <Image alt='pic' src={Upward} className="rounded-full" layout='fill' objectFit='cover' />

                    </div>
                </a>
            </Link>
            <div className="text-black font-bold font-gothamnarrow-bold copywright absolute -bottom-16 left-1/2  -translate-x-1/3">
                copywright &#169; 2020 Betalectic
            </div>
        </div>
    )
}

export default footer