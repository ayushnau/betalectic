import React from 'react'
import Image from 'next/image'


const aboutus = () => {
  return (
   <>
      <div className="w-full bg-[url('https://betalectic.com/utouch/img/clouds19.png')] bg-cover bg-no-repeat">
        <div className="px-4 py-16 w-full md:w-3/4 mx-auto ">
          <div  className="wrapper flex justify-between w-full h-full flex-col md:flex-row">
            <div className="md:w-7/12 w-full">
              <div className='font-gothamnarrow-medium font-bold text-lg mb-8'>COMPANY</div>
              <div className='font-gothamnarrow-bold text-5xl mb-16'>Betaelectic = <span className='text-blue-500'>Beta + Eclectic</span></div>
              <div className='font-gothamnarrow-bold text-4xl mb-8'>Eclectic means ‘deriving ideas, style, or taste from a broad and diverse range of sources’
              </div>
              <div className='font-gothamnarrow-medium text-lg'>In world of open source software, saas and innumerable technology stacks – we figure out what is best for your product (cost wise, development wise, scaling wise) and give you the beta.</div>
            </div>
            <div className='md:w-4/12 w-full'>
              <div className=" w-full md:h-full h-48  relative">
                <Image alt='pic' src={"https://betalectic.com/utouch/img/man.png"} className="" layout='fill' objectFit='contain' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between w-full md:w-3/4 mx-auto my-32 font-gothamnarrow-medium">
              <div className="flex-1 px-4">
                <div className="heading text-xl font-bold mb-1 text-blue-400">01.</div>
                <div className="text-3xl font-gothamnarrow-bold mb-4">Who We Are</div>
                <div className="text-base  mb-1" >We are a young team of professionals with great energy to build products for people with ideas. We love building products.</div>
              </div>
              <div className="flex-1 px-4">
                <div className="heading text-xl  font-bold mb-1 text-blue-400">02.</div>
                <div className="text-3xl font-gothamnarrow-bold mb-4">What We Do</div>
                <div className="text-base  mb-1">We architect your idea, build websites, Android and iOS apps, mobile apis and other technology solutions.</div>
              </div>
              <div className="flex-1 px-4">
                <div className="heading text-xl font-bold mb-1 text-blue-400">03.</div>
                <div className="text-3xl font-gothamnarrow-bold mb-4">How We Do It</div>
                <div className="text-base  mb-1" >We sit and understand the problem you want to solve. We pick the best open source tools and start building.</div>
              </div>
          
      </div>

     
      </>

  )
}

export default aboutus