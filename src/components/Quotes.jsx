import React from 'react'
import quote from '../images/“.png'
import line from '../images/linevertical.png'

const Quotes = () => {
    return (
        < div className='flex space-x-16 justify-center' >
            <div className='flex items-center mt-40 justify-center'>
                <div className='flex space-y-5 flex-col'>
                    <img className='w-10' src={quote} alt="" />
                    <img className='w-5 h-22 ' src={line} alt="" />
                </div>
                <div className='text-[30px] text-[#FDF0CD] font-Playfair ml-5'>
                    Thank you for this <br /> genuinely the best/only <br /> thing I really need to look <br /> at Instagram
                </div>
            </div>
            <div className='flex items-center mt-40 justify-center'>
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