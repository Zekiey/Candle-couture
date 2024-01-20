import Icon from '../images/Logo.png'

const Header = () => {
    return (
        <div className="text-[18px] flex w-[65vw] space-x-5 ml-40 ">
            <ul className="flex space-x-20 justify-around items-center font-Playfair  text-[#FDF0CD] animate-moveinopacity">
                <li className='hover:text-white cursor-pointer '>People</li>
                <li className='hover:text-white cursor-pointer'>Podcast</li>
                <li className='hover:text-white cursor-pointer'>Playlist</li>
                <img className='w-16' src={Icon} alt="" />
                <li className='hover:text-white cursor-pointer'>Poetry</li>
                <li className='hover:text-white cursor-pointer'>Player</li>
                <li className='hover:text-white cursor-pointer'>Contact</li>
            </ul>
        </div>
    )
}

export default Header