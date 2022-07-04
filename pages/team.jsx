import React from 'react'
import Image from 'next/image'
import linkedin from '../static/linkedin.png'
import data from '../data'


const TeamCard = (props) => {
    return (
        <div className="card col-span-3	  ">

            <div className="firstsection flex mb-4">
                <div className="imagemastercontainer w-20 h-20 mr-6">
                    <div className="imagecontainer shadow-black shadow-md border-white border-2  rounded-full  w-full h-full overflow-hidden relative">
                        <Image src={props.image} className="rounded-full" layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className="nameContainer w-36 font-gothamnarrow-medium text-xl sm:text-2xl whitespace-nowrap">
                    <h1 className="name uppercase ">{props.name}</h1>
                    <div className="post text-slate-400 text-sm">{props.position}</div>
                </div>
                
            </div>
            <div className="secondsection font-gothamnarrow-light tracking-wider px-4 relative">
                <p className="lg:text-sm font-bold">{props.about}</p>
                <ul className='mt-3'>
                    <li className="w-10 h-10"><a href="/">
                        <div className="w-full h-full rounded-full relative border-white border-1 hover:shadow-sm hover:shadow-black">
                            <Image src={linkedin} className="rounded-full" layout='fill' objectFit='cover' /></div>
                    </a></li>
                </ul>
                <div className="after:content-[''] after:absolute after:top-0 after:left-0 after:w-0.5 after:h-full after:bg-slate-300 after:rounded"></div>
            </div>


        </div>
    )
}

const team = () => {
    return (
        <div className="wrapper mt-4 max-w-screen-2xl mx-auto font-gothamnarrow-medium w-full md:w-3/4">
            <div className="header font-gothamnarrow-bold relative text-4xl  px-4 mb-14 md:px-4  flex">
                <div className="w-60">Meet the team</div>
            <div className="relative flex-1">
                <div className="after:content-[''] after:h-1 after:w-full  after:absolute after:top-4 after:left-3 after:rounded-full after:bg-slate-400 "></div>
            </div>
            </div>
            <div className="teamMasterContainer grid  md:grid-cols-6 gap-8 px-4 md:px-4  mx-auto">
            {data.map((n,i)=>{
                   return( <TeamCard name={n.name} position={n.position} about={n.about} image={n.imagelink}/>)
                })}
            </div>
        </div>
    )
}

export default team