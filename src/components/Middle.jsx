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
            <img className='w-96 ml-[40vw]' src={prayer} alt="" />
            <div className='ml-10 flex space-x-12 items-center'>
                <img className=' h-5' src={line1} alt="" />
                <div className='flex-col'>
                    <p className='font-Playfair text-[40px] italic text-[#FDF0CD]'>Prayer</p>

                </div>
                <img src={line2} alt="" />
            </div>
            <div className='flex text-black space-x-10 justify-center mt-10'>
                <div className='bg-[#FDF0CD] flex rounded-md  items-center space-x-5 pr-5 pt-2 pb-2 hover:-translate-y-3 hover:transition hover:duration-300'>
                    <img className='w-5 h-5 -mt-10' src={clipboard} alt="" />
                    <div>
                        <h1 className='font-Playfair text-[20px] font-semibold italic'>Newsletter</h1>
                        <p className='font-Sora text-[12px]'>Join hundreds of others <br /> finding light in their daily lives.</p>
                    </div>
                    <img className='w-5 h-5' src={add} alt="" />
                </div>
                <div className='bg-[#FDF0CD] flex rounded-md  items-center space-x-5 pr-5 pt-2 pb-2 hover:-translate-y-3 hover:transition hover:duration-300'>
                    <img className='w-5 h-5 -mt-10' src={task} alt="" />
                    <div className='-mt-5'>
                        <h1 className='font-Playfair text-[20px] font-semibold italic'>Guides</h1>
                        <p className='font-Sora text-[12px]'>Lorem ipsum lorem</p>
                    </div>
                    <p className='font-Sora text-[8px] bg-gradient-to-b from-[rgb(233,189,71,0.909)] to-[rgb(120,88,0,0.8706)]'>Coming soon</p>
                </div>
                <div className='bg-[#FDF0CD] flex rounded-md  items-center space-x-5 pr-5 pt-2 pb-2 hover:-translate-y-3 hover:transition hover:duration-300'>
                    <img className='w-5 h-5 -mt-10' src={device} alt="" />
                    <div className='-mt-5'>
                        <h1 className='font-Playfair text-[20px] font-semibold italic'>Prayer Request</h1>
                        <p className='font-Sora text-[12px]'>Lorem ipsum lorem</p>
                    </div>
                    <img className='w-5 h-5' src={add} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Middle