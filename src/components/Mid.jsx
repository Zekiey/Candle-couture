import everywhere from '../images/everywhere.png'
import spring from '../images/spring.png'
import love from '../images/love.png'
import plant from '../images/plant.png'
import star from '../images/star.png'
import arrow from '../images/rightarrow.png'
import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });

        scrollObserver.observe(ref.current);

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    const classes = `transition-opacity duration-800  
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;


    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};
function Mid() {
    return (

        <div className='mt-10 bg-gradient-to-b from-[#E9BD47] to-[#785800] h-60 flex justify-around  items-center '>

            <img className='w-28' src={spring} alt="" />
            <div className="flex-col flex items-center justify-center -mt-20">
                <RevealOnScroll >
                    <div className=" bg-[#785800] h-6 w-10 rounded-3xl ml-60 z-20 "></div>
                    <p className="text-[#FDF0CD] font-Playfair text-[30px] italic font-semibold z-30 -mt-7">Browse by Category</p>
                    <div className='flex text-[black] space-x-10 mt-10 font-semibold  '>
                        <div className='flex bg-[#FDF0CD] w-auto items-center   border-r-black border rounded-md pr-5 pt-1 pb-2 space-x-2 border-b-black hover:-translate-y-3 hover:transition hover:duration-300'>
                            <img className='w-5' src={love} alt="" />
                            <button className='font-Playfair italic' >Joy</button>
                            <img className='w-4' src={arrow} alt="" />
                        </div>
                        <div className='flex bg-[rgb(253,240,205)] w-auto items-center  border-r-black border rounded-md  pr-5 pt-1 pb-2 space-x-2 border-b-black hover:-translate-y-3 hover:transition hover:duration-300'>
                            <img className='w-5' src={plant} alt="" />
                            <button className='font-Playfair italic'>Peace</button>
                            <img className='w-4' src={arrow} alt="" />
                        </div>
                        <div className='flex bg-[#FDF0CD] w-auto items-center  border-r-black border rounded-md  pr-5 pl-2 pt-1 pb-2 space-x-2 border-b-black hover:-translate-y-3 hover:transition  transform hover:duration-300'>
                            <img className='w-5' src={star} alt="" />
                            <button className='font-Playfair italic' >Hope</button>
                            <img className='w-4' src={arrow} alt="" />
                        </div>

                    </div>
                </RevealOnScroll >
            </div>
            <img className='w-48' src={everywhere} alt="" />


        </div >

    )
}

export default Mid