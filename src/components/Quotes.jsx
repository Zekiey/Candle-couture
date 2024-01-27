import React from 'react'
import quote from '../images/“.png'
import line from '../images/linevertical.png'

const Quotes = () => {
    return (
        < div className='flex space-x-16 justify-center' >
            <div className='flex items-center mt-40 max-[320px]:mt-10 justify-center'>
                <div className='flex space-y-14 flex-col'>
                    <img className='w-10 ' src={quote} alt="" />
                    <img className='w-5 h-22 max-[320px]:h-16 max-[320px]:w-3 max-[320px]:ml-5 ' src={line} alt="" />
                </div>
                <div className='text-[30px] max-[320px]:text-[24px] max-[375px]:text-[40px] text-[#FDF0CD] font-Playfair ml-5'>
                    Thank you for this <br /> genuinely the best/only <br /> thing I really need to look <br /> at Instagram
                </div>
            </div>
            <div className='flex items-center mt-40 justify-center max-[425px]:hidden'>
                <div className='flex space-y-5 -mt-36 flex-col'>
                    <img className='w-10' src={quote} alt="" />

                </div>
                <div className='text-[30px] text-[#FDF0CD] font-Playfair ml-5'>
                    I love how <br /> meticulous the <br />website is as it really <br />  looks at your needs
                </div>
            </div>
        </div>
    )
}

export default Quotes