import { useState } from 'react'
import Icon from '../images/Logo.png'

const Header = () => {
    let Links = [
        { name: "People", link: "/" },
        { name: "Podcast", link: "/" },
        { name: "Playlist", link: "/" }

    ]

    let Linker = [
        { name: "Poetry", link: "/" },
        { name: "Player", link: "/" },
        { name: "Contact", link: "/" }

    ]
    let [open, setOpen] = useState(false);


    return (
        <div className="text-[18px] flex  space-x-5   fixed max-[375px]:top-0 top-0  z-50 left-0   bg-black w-[100vw] max-[375px]:w-[216vw] max-[425px]:w-[152vw] max-[375px]:h-20 max-[320px]:h-auto ">
            <ul className="flex space-x-28 justify-around items-center font-Playfair  text-[#FDF0CD] animate-moveinopacity max-[320px]:hidden max-[375px]:hidden max-[425px]:hidden ml-40 ">
                {
                    Links.map((Link) => (
                        <li key={Link.name} >
                            <a href={Link.link} className='hover:text-white'>{Link.name}</a>
                        </li>
                    ))
                }
                <img className='w-20' src={Icon} alt="" />
                {
                    Linker.map((Link) => (
                        <li key={Link.name}>
                            <a href={Link.link} className='hover:text-white'>{Link.name}</a>
                        </li>

                    ))
                }
            </ul>
            <div>
                <div className='max-[320px]:flex min-[426px]:hidden max-[375px]:space-x-80 max-[425px]:space-x-60 items-center  max-[375px]:flex max-[425px]:flex max-[375px]:justify-between max-[425px]:justify-between max-[375px]:w-[210vw] max-[425px]:w-[145vw] space-x-60'>
                    <img className='max-[320px]:w-10 max-[375px]:w-16 max-[425px]:w-20  min-[426px]:hidden' src={Icon} alt="" />
                    <div onClick={() => setOpen(!open)} className='max-[320px]:text-[20px] max-[375px]:text-[40px] max-[425px]:text-[40px] top-6 max-[375px]:top-8'><ion-icon name={open ? 'close' : 'menu'}></ion-icon></div>
                </div>
                <ul className={`min-[426px]:hidden max-[320px]:w-full   bg-black  transition-all duration-500 ease-in ${open ? 'top-20' : 'hidden'} `}>
                    {
                        Links.map((Link) => (
                            <li key={Link.name} >
                                <a href={Link.link} className='hover:text-white text-[20px] max-[375px]:text-[30px] max-[425px]:text-[30px]'>{Link.name}</a>
                            </li>
                        ))
                    }
                    {
                        Linker.map((Link) => (
                            <li key={Link.name}>
                                <a href={Link.link} className='hover:text-white text-[20px]  max-[375px]:text-[30px] max-[425px]:text-[30px]'>{Link.name}</a>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div >
    )
}

export default Header