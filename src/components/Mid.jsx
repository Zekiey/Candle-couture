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

        <div className='mt-10 bg-gradient-to-b from-[#E9BD47] to-[#785800] h-60 max-[320px]:h-72 flex justify-around  items-center   max-[320px]:flex-col max-[375px]:flex-col max-[375px]:flex max-[320px]:flex '>

            <img className='w-28 max-[376px]:hidden' src={spring} alt="" />
            <div className="flex-col flex items-center justify-center max-[320px]:mt-1 -mt-20 max-[320px]:flex-col max-[375px]:flex-col max-[320px]:flex max-[375px]:flex">
                <RevealOnScroll >
                    <div className=" bg-[#785800] h-6 w-10 rounded-3xl ml-60 z-20 "></div>
                    <p className="text-[#FDF0CD] font-Playfair text-[30px] max-[375px]:text-center max-[375px]:text-[40px] italic font-semibold z-30  -mt-7">Browse by Category</p>
                    <div className='flex text-[black] space-x-10 max-[320px]:space-y-8  max-[320px]:items-center max-[320px]:justify-center mt-10 font-semibold  max-[320px]:flex-col  max-[320px]:flex max-[375px]:flex max-[375px]:-ml-10 max-[320px]:-ml-10'>
                        <div className='flex bg-[#FDF0CD] w-auto max-[320px]:w-28 max-[375px]:w-44 items-center max-[320px]:ml-10 max-[375px]:ml-10 max-[375px]:space-x-4  border-r-black border rounded-md pr-5 pt-1 pb-2 space-x-2  border-b-black hover:-translate-y-3 hover:transition hover:duration-300'>
                            <img className='w-5 max-[375px]:w-10' src={love} alt="" />
                            <button className='font-Playfair italic max-[375px]:text-[30px]' >Joy</button>
                            <img className='w-4  max-[375px]:w-8' src={arrow} alt="" />
                        </div>
                        <div className='flex bg-[rgb(253,240,205)] w-auto max-[375px]:w-44 max-[375px]:space-x-2  right-7  max-[320px]:w-28 items-center  border-r-black border rounded-md  pr-5 pt-1 pb-2 space-x-2 border-b-black hover:-translate-y-3 hover:transition hover:duration-300'>
                            <img className='w-5 max-[375px]:w-10' src={plant} alt="" />
                            <button className='font-Playfair italic max-[375px]:text-[30px]'>Peace</button>
                            <img className='w-4 max-[375px]:w-8' src={arrow} alt="" />
                        </div>
                        <div className='flex bg-[#FDF0CD] w-auto  max-[375px]:w-44   max-[320px]:w-28 max-[375px]:space-x-2  items-center  border-r-black border rounded-md  pr-5 pl-2 pt-1 pb-2 space-x-2 border-b-black hover:-translate-y-3 hover:transition  transform hover:duration-300'>
                            <img className='w-5  max-[375px]:w-10' src={star} alt="" />
                            <button className='font-Playfair italic max-[375px]:text-[30px]' >Hope</button>
                            <img className='w-4  max-[375px]:w-8' src={arrow} alt="" />
                        </div>

                    </div>
                </RevealOnScroll >
            </div>
            <img className='w-48 max-[376px]:hidden' src={everywhere} alt="" />


        </div >

    )
}

export default Mid