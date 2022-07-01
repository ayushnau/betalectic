// import React, { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import logo from '../static/betalectic_logo.png'


// const sample = () => {
//   const [navdisplay, setnavdisplay] = useState({ display: 'inline-block' })
//   const handleClick = () => {
//     if (navdisplay.display == 'inline-block') {
//       setnavdisplay({ display: 'none' })
//     }
//     else {
//       setnavdisplay({ display: 'inline-block' })
//     }
//   }

//   return (

//     <>
//     <div className="header relative">
//       <div className="headerlines before:content-['ayush'] before:absolute before:w-full before:top-0 before:h-5 before:bg-gradient-to-r before:from-secondry-color before:via-blue  before:to-secondry-color" ></div>
//       <div className='flex flex-wrap mx-6 p-2rem relative top-0 font-nunito text-navbar uppercase font-bold items-center justify-between  lg:flex-col sm:flex-row sm:mx-3 '>
      
//         <div className="logo w-75 h-22 ">{<Image className='w-full h-full object-cover' src={logo} />}</div>
//         <div className=' border-black'>
//           <ul style={navdisplay} className=' sm:absolute w-full  sm:left-0 sm:top-28 '>
//             <li className='inline-block sm:block sm:my-7 sm:mx-2 sm:border-navbar sm:border-2 whitespace-nowrap mx-4 rounded bg px-2 py-1 hover:bg-red-800 hover:text-blue-700 '><Link href="/">
//           <a>About Us</a>
//         </Link></li>
//             <li className='inline-block sm:block sm:my-7 sm:mx-2 sm:border-navbar sm:border-2 whitespace-nowrap mx-4 rounded bg px-2 py-1 hover:bg-red-800 hover:text-blue-700 '><a href="/">Team</a> </li>
//             <li className='inline-block sm:block sm:my-7 sm:mx-2 sm:border-navbar sm:border-2 whitespace-nowrap mx-4 rounded bg px-2 py-1 hover:bg-red-800 hover:text-blue-700 '><a href="/">Our Work</a> </li>
//             <li className='inline-block sm:block sm:my-7 sm:mx-2 sm:border-navbar sm:border-2 whitespace-nowrap mx-4 rounded bg px-2 py-1 hover:bg-red-800 hover:text-blue-700 '><a href="/">Contact</a> </li>
//           </ul>
//           <div onClick={handleClick} className='hamburger ml-auto hidden sm:flex  justify-end'>
//             <span>Menu</span>
//             <svg viewBox="0 0 100 80" width="40" height="40" fill='#657c98'>
//               <rect width="100" height="15"></rect>
//               <rect y="30" width="100" height="15"></rect>
//               <rect y="60" width="100" height="15"></rect>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>




//   )
// }

// export default sample

