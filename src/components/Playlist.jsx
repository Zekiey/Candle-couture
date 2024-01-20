import line1 from '../images/line1.png'
import line2 from '../images/Line 2.png'
import Marquee from 'react-fast-marquee'
import cup from '../images/cup.png'
import rounded from '../images/rounded.png'
import fire from '../images/fire.png'
import autumn from '../images/autumn.png'
import plane from '../images/plane.png'
import white from '../images/white.png'
import art from '../images/art.png'
import Art from '../images/Arts.png'
import pink from '../images/pink.png'
import pinkart from '../images/pinkart.png'
import shake from '../images/handshake.png'
import curtain from '../images/curtain.png'
import ten from '../images/ten.png'
import people from '../images/people.png'
import man from '../images/man.png'

const Playlist = () => {
    return (
        <div>
            <div className='ml-10 flex space-x-12 items-center'>
                <img className=' h-5' src={line1} alt="" />
                <div className='flex-col'>
                    <p className='font-Playfair text-[40px] italic text-[#FDF0CD]'>Playlist</p>
                    <p className='font-Sora text-[16px] text-[#FDF0CD]'>Sounds that uplifts the spirit</p>
                </div>
                <img src={line2} alt="" />
            </div>
            <div className='mt-5' >
                <Marquee direction='right' speed={50} gradient={true} gradientWidth={10} gradientColor='black'>
                    <div className='flex space-x-7 w-full  '>
                        <div><img className='w-60' src={cup} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 105</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div>
                            <img className='w-60' src={rounded} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 104</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div><img className='w-60' src={fire} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 102</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div> <img className='w-60' src={autumn} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 106</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div> <img className='w-40' src={white} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 103</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>

                    </div>
                </Marquee >
            </div>
            <div className='ml-5 flex space-x-8 items-center'>
                <img src={line2} alt="" />
                <div className='flex-col'>
                    <p className='font-Playfair text-[40px] italic text-[#FDF0CD]'>Poetry</p>
                    <p className='font-Sora text-[16px] text-[#FDF0CD]'>Thoughts of life inspired by everyday encounters</p>
                </div>
                <img className=' h-5' src={line1} alt="" />
            </div>

            <div className='mt-10' >
                <Marquee direction='left' speed={50} gradient={true} gradientWidth={10} gradientColor='black'>
                    <div className='flex space-x-7 w-full  '>
                        <div><img className='w-60' src={plane} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 101</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div>
                            <img className='w-60' src={art} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 102</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div><img className='w-48' src={Art} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 104</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div> <img className='w-60' src={pink} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 103</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div> <img className='w-60' src={pinkart} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 105</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>

                    </div>
                </Marquee >
            </div>
            <div className='ml-5 flex space-x-8 items-center'>
                <img src={line1} alt="" />
                <div className='flex-col'>
                    <p className='font-Playfair text-[40px] italic text-[#FDF0CD]'>Podcast</p>
                    <p className='font-Sora text-[16px] text-[#FDF0CD]'>Sounds that uplifts the spirit</p>
                </div>
                <img className=' h-5' src={line2} alt="" />
            </div>

            <div className='mt-10' >
                <Marquee direction='right' speed={50} gradient={true} gradientWidth={10} gradientColor='black'>
                    <div className='flex space-x-7 w-full  '>
                        <div><img className='w-40' src={shake} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 100</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div>
                            <img className='w-60' src={ten} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 101</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div><img className='w-60' src={people} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 102</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div> <img className='w-60' src={curtain} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 103</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>
                        <div> <img className='w-60' src={man} alt="" />
                            <p className='font-Playfair italic text-[32px] text-[#FDF0CD]'>Soulful Sundays</p>
                            <p className='font-Sora text-[16px] text-[#FDF0CD]'> Playlist 104</p>
                            <button className='border rounded-full p-1 text-[#43583e] border-[#43583E] hover:text-[#FDF0CD] '>Afrobeats</button>
                        </div>

                    </div>
                </Marquee >
            </div>
        </div>
    )
}

export default Playlist