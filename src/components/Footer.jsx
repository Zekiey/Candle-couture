

const Footer = () => {
    return (
        <div className="bg-[rgb(253,240,205,0.04)] h-40 mt-20 flex-col flex justify-center items-center">
            <div className="font-Playfair text-[20px] text-[#FBF0D1] italic font-semibold">
                Stay up to date on all things cc
            </div>
            <div className="text-white items-center flex ">
                <input type="email" name="email address" placeholder="Email address" id="" className="bg-[rgb(246,221,160,0.10)] rounded-3xl  w-72 border p-1 border-[#FBF0D1]" />
                <button className="font-Sora text-[10px] text-black rounded-3xl p-1 -ml-14 bg-[#FDF0CD] hover:scale-125">Sign up</button>
            </div>

        </div>
    )
}

export default Footer