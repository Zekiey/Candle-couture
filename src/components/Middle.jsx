import prayer from '../images/Prayer.png'
import line1 from '../images/line1.png'
import line2 from '../images/Line 2.png'
import clipboard from '../images/clipboard-text.png'
import add from '../images/add-circle.png'
import task from '../images/task-square.png'
import device from '../images/device-message.png'

const Middle = () => {
    return (
        <div>
            <img className='w-96 ml-[40vw] max-[320px]:w-60 max-[320px]:ml-10' src={prayer} alt="" />
            <div className='ml-10 flex max-[425px]:flex space-x-12 max-[425px]:space-x-8 items-center'>
                <img className=' h-5 max-[320px]:w-10 max-[375px]:w-60 max-[425px]:w-60 max-[425px]:h-2 max-[375px]:h-4 max-[320px]:h-1' src={line1} alt="" />
                <div className='flex-col'>
                    <p className='font-Playfair text-[40px] max-[320px]:text-[20px] max-[425px]:text-[30px] italic text-[#FDF0CD]'>Prayer</p>

                </div>
                <img className='max-[320px]:h-1 max-[320px]:w-10 max-[375px]:w-40 max-[425px]:w-40 max-[425px]:h-4 max-[375px]:h-4' src={line2} alt="" />
            </div>
            <div className='flex max-[320px]:flex-col max-[375px]:flex-col max-[425px]:flex-col   max-[375px]:h-auto max-[425px]:h-auto max-[320px]:h-auto  max-[320px]:space-y-5 max-[375px]:space-y-5 max-[425px]:space-y-10  text-black space-x-10 justify-center max-[375px]:items-center max-[425px]:items-center max-[425px]:flex max-[425px]:justify-center mt-10'>
                <div className='bg-[#FDF0CD] flex  rounded-md max-[425px]:w-96  items-center space-x-5 max-[425px]:space-x-9 pr-5 max-[320px]:pr-1 max-[320px]:w-60 max-[375px]:w-96 max-[320px]:ml-10 max-[375px]:ml-10 max-[425px]:ml-9 pt-2 pb-2 hover:-translate-y-3 hover:transition hover:duration-300'>
                    <img className='w-5 max-[375px]:w-10 h-5 max-[375px]:h-10 -mt-12 max-[425px]:w-5' src={clipboard} alt="" />
                    <div>
                        <h1 className='font-Playfair text-[20px] max-[375px]:text-[40px] max-[425px]:text-[20px] font-semibold italic'>Newsletter</h1>
                        <p className='font-Sora text-[12px] max-[375px]:text-[20px] max-[425px]:text-[16px]'>Join hundreds of others <br /> finding light in their daily lives.</p>
                    </div>
                    <img className='w-5 h-5 max-[375px]:w-10  max-[375px]:h-10' src={add} alt="" />
                </div>
                <div className='bg-[#FDF0CD] flex rounded-md max-[425px]:h-auto max-[425px]:w-68  items-center space-x-5 pr-5 max-[320px]:pr-1 max-[320px]:w-60 max-[425px]:mt-10  max-[425px]:pt- max-[375px]:w-96 max-[320px]:pt-8 max-[375px]:pt-8 max-[320px]:pb-5 max-[375px]:pb-5 pt-2 pb-2 hover:-translate-y-3 hover:transition hover:duration-300'>
                    <img className='w-5 h-5 max-[375px]:w-10  max-[375px]:h-10  -mt-8' src={task} alt="" />
                    <div className='-mt-5 max-[425px]:mt-5 '>
                        <h1 className='font-Playfair text-[20px] font-semibold italic max-[375px]:text-[40px] max-[425px]:text-[20px] '>Guides</h1>
                        <p className='font-Sora text-[12px] max-[375px]:text-[20px] max-[425px]:text-[16px]'>Lorem ipsum lorem, sit repudiandae <br /> architecto quasicorrupti et?</p>
                    </div>
                    <p className='font-Sora text-[8px] max-[375px]:text-[20px] max-[425px]:text-[16px] bg-gradient-to-b max-[375px]:w-auto  max-[375px]:h-auto from-[rgb(233,189,71,0.909)] to-[rgb(120,88,0,0.8706)]'>Coming soon</p>
                </div>
                <div className='bg-[#FDF0CD] flex rounded-md max-[425px]:h-auto max-[425px]:items-center max-[425px]:justify-center space-x-5 pr-5 max-[320px]:pr-1 max-[320px]:w-60 max-[375px]:w-96 max-[320px]:pt-8 max-[375px]:pt-8 max-[320px]:pb-5 max-[375px]:pb-5 pt-2 pb-2 hover:-translate-y-3 hover:transition hover:duration-300'>
                    <img className='w-5 h-5  max-[375px]:w-10  max-[375px]:h-10 -mt-8' src={device} alt="" />
                    <div className='-mt-5 max-[425px]:mt-5'>
                        <h1 className='font-Playfair text-[20px] font-semibold italic max-[375px]:text-[40px] max-[425px]:text-[20px]'>Prayer Request</h1>
                        <p className='font-Sora text-[12px] max-[375px]:text-[20px] max-[425px]:text-[16px]'>Lorem ipsum  Lorem ipsum dolor sit amet <br /> llo adipisci sunt natus molestias iusto architecto </p>
                    </div>
                    <img className='w-5 h-5 max-[375px]:w-10  max-[375px]:h-10 ' src={add} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Middle