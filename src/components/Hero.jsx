import dots from '../images/Vector.png'
import love from '../images/Vector (1).png'


const Hero = () => {
    return (
        <div className="mt-20 flex space-x-40">
            <div>
                <div className="ml-60 flex-col ">
                    <p className="font-Playfair italic text-[70px] text-[#FDF0CD]  ">Faith,<br /> Creativity <span className="bg-gradient-to-r from-[#E9BD47] to-[#785800] rounded-full   pr-8 h-8 pl-1">&</span> <br /> Inspiration</p>
                    <p className='font-Sora text-[16px]'>In God’s light, we find our own light. (Psalm 36:9) <br /> Then, we can be a light to someone else.</p>
                </div>
            </div>
            <div className='flex items-center '>
                <div className='clip-your-needful-style bg-[#FDF0CD] w-[20vw] h-60 translate animate-moveinopacity '>
                    <div className='bg-[#FF99B4] rounded-full w-2 h-1 ml-32 mt-10 p-2'></div>
                    <div className='bg-[#00A5CC] rounded-full w-4 h-3 ml-28 mt-10 p-2'></div>
                    <div className='bg-[#E9BD46] rounded-full w-6 h-6  ml-32 mt-5 p-2'></div>
                </div>
                <img className='w-40 -ml-72 z-50 animate-moveinleft' src={dots} alt="" />
                <img className='w-40 z-50  -ml-20 -rotate-45 animate-moveinright' src={love} alt="" />
            </div>
        </div>
    )
}

export default Hero