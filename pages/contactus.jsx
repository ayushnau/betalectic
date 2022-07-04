import React from 'react'
import Image from 'next/image'

const contactus = () => {
    return (
        <div className="mastercontainer px-4 py-16 mx-auto">
            <div className="bar text-xl ml-2 flex align-middle">
                <span className='inline-flex align-middle'>
                    <span className="w-7 h-7 inline-block relative rounded-full mr-1">
                        <Image alt='pic' src="https://img.icons8.com/color/48/000000/home--v2.png" className="rounded-full" layout='fill' objectFit='cover' />
                    </span>

                    Home</span>
                <span className='ml-2 text-blue-600'>
                    ContactUs</span>
            </div>

            <div className="section font-gothamnarrow-medium ">
                <div className="heading font-gothamnarrow-bold text-7xl mb-8">Get in Touch with Us</div>
                <p className="font-gothamnarrow-light mb-4">

                    How can we help you? Leave your contact details and we will get back to you..</p>
                <div className="font-gothamnarrow-bold text-xl mb-1 flex align-middle">
                    <span className="w-12 h-12  px-2 inline-block relative  mr-3">
                        <Image alt='pic' src="https://img.icons8.com/008bff/marker" className="" layout='fill' objectFit='cover' />
                    </span>
                    3rd Floor, Mitti’s Building, Near Divyashree Lanco Hills, Chaitanya Enclave, Manikonda, Hyderabad, Telangana - 500089
                </div>
                <div className="font-gothamnarrow-bold text-xl mt-6 flex items-center">
                    <span className="w-10 h-10 inline-block relative  mr-3">
                        <Image alt='pic' src="https://img.icons8.com/008bff/mail" className="" layout='fill' objectFit='cover' />
                    </span>
                    contact@betalectic.com
                </div>
               
            </div>
        </div>
    )
}

export default contactus