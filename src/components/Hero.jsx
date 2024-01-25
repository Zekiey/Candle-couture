import dots from '../images/Vector.png'
import love from '../images/Vector (1).png'


const Hero = () => {
    return (
        <div className="mt-20 max-[320px]:mt-10 flex space-x-40 max-[320px]:flex-col max-[375px]:flex-col  ">
            <div>
                <div className="ml-60 flex-col max-[320px]:ml-10  ">
                    <p className="font-Playfair italic text-[70px] text-[#FDF0CD] max-[320px]:text-[40px]  ">Faith,<br /> Creativity <span className="bg-gradient-to-r from-[#E9BD47] to-[#785800] rounded-full max-[320px]:pr-2  pr-8 h-8 pl-1">&</span> <br /> Inspiration</p>
                    <p className='font-Sora text-[16px] max-[320px]:text-[10px]'>In God’s light, we find our own light. (Psalm 36:9) <br /> Then, we can be a light to someone else.</p>
                </div>
            </div>
            <div className='flex max-[375px]:flex items-center max-[375px]:items-center max-[320px]:mt-5 max-[375px]:mt-5 max-[375px]:ml-60'>
                <div className='clip-your-needful-style bg-[#FDF0CD] w-[20vw] max-[320px]:w-[40vw] max-[375px]:w-[40vw] h-60 max-[320px]:h-[30vh] max-[375px]:h-[30vh] translate animate-moveinopacity max-[320px]:-ml-16 max-[375px]:ml-40 '>
                    <div className='bg-[#FF99B4] rounded-full w-2 h-1 ml-32 mt-10 p-2'></div>
                    <div className='bg-[#00A5CC] rounded-full w-4 h-3 ml-28 mt-10 p-2'></div>
                    <div className='bg-[#E9BD46] rounded-full w-6 h-6  ml-32 mt-5 p-2'></div>
                </div>
                <img className='w-40 max-[320px]:w-20 max-[375px]:w-20 -ml-72 max-[320px]:-ml-28 max-[375px]:-ml-28 z-50 animate-moveinleft' src={dots} alt="" />
                <img className='w-40  max-[320px]:w-20 max-[375px]:w-20 z-50  -ml-20 max-[320px]:-ml-20 max-[375px]:-ml-20 -rotate-45 animate-moveinright' src={love} alt="" />
            </div>
        </div>
    )
}

export default Hero