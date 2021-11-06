import React,{useState} from "react";

//icons
import {FaPizzaSlice, FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";

const MobileNav = ({user,isDropdownOpen,setIsDropdownOpen}) => {
    return(
        <>
        <div className="items-center justify-between flex w-full md:hidden">
        <div className="w-28">
            <img 
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="LOGO"
            className="w-full h-full"
            />
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
                Use App
            </button>
            {user ? (
                <>
                <div onClick={()=>setIsDropdownOpen((prev) => !prev)} className="border p-2 border-gray-300 text-red-400 w-16 h-16 rounded-full">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                alt="" 
                className="w-full h-full rounded-full object-cover"/>
                </div>
                {isDropdownOpen && (
                    <div className="absolute top-16 right-1 shadow-lg py-3 pr-3 pl-3 w-32  gap-2 bg-white border-2 border-gray-300 rounded z-30 flex-col ">
                    <button>
                        sign out
                    </button>
                </div>
                )}
                </>
            ):(
                <>
                <span onClick={() => setIsDropdownOpen((prev)=>!prev)} className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                    <FaUserAlt/>
                </span>
                {isDropdownOpen &&(
                    <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white flex flex-col gap-2">
                        <button>sign in</button>
                        <button>sign out</button>
                    </div>
                )}
                </>
            )}
        </div>
        </div>
            
        </>
    );
};


const LargeNav = ({user,isDropdownOpen,setIsDropdownOpen}) => {
    return(
        <>
        <div className="hidden lg:inline container px-32 mx-auto">
            <div className="hidden gap-4 w-full items-center justify-around lg:flex">
                <div className="w-28">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                    alt="LOGO" 
                    className="w-full h-full"/>
                </div>
                <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-300">
                            <HiLocationMarker/>
                        </span>
                        <input type="text" 
                        placeholder="Delhi NCR" 
                        className=" focus:outline-none"/>
                        <IoMdArrowDropdown/>
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <RiSearch2Line/>
                        <input type="text" 
                        placeholder="Search for restaurants cusine or a dish"
                        className="w-full focus:outline-none"
                        />
                    </div>
                </div>
                {user ? (
                    <div className="relative w-16" >
                        <div onClick={() => setIsDropdownOpen((prev)=>!prev)} className="border p-2 border-gray-300 text-zomato-400 w-full h-16 rounded-full">
                            <img src="https://media.istockphoto.com/vectors/cartoon-smiling-small-boy-in-nightwear-and-home-slippers-with-a-book-vector-id914062554?k=6&m=914062554&s=612x612&w=0&h=mwqZNLhEKozeHNfLQJiXw0Vs9irzr74xJoKAtzDZ3bI=" 
                            alt="user"
                            className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute top-20 shadow-lg py-3 pr-3 pl-3 w-32  gap-2 bg-white border-2 border-gray-300 rounded z-30 flex-col ">
                                <button>
                                    Sign up
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="ml-28 flex gap-6">
                        <button className="text-gray-500 text-xl hover:text-gray-800 ">
                            Login
                        </button>
                        <button className="text-gray-500 text-xl hover:text-gray-800 ">
                            Signup
                        </button>
                    </div>
                ) }
            </div>
        </div>
        </>
    )
}

const Navbar = () => {
    

const [user,setUser] = useState(
    {
        name:"Gayathri"
    }
);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return(
    <>
    <nav className="py-4 px-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav user={user} 
        isDropdownOpen={isDropdownOpen} 
        setIsDropdownOpen={setIsDropdownOpen}/>

        <LargeNav user={user} 
        isDropdownOpen={isDropdownOpen} 
        setIsDropdownOpen={setIsDropdownOpen} />

    </nav>
    </>
    );

};

export default Navbar;