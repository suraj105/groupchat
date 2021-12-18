import { useMoralis } from "react-moralis"
import Image from "next/image";
import mushroomhead from ".//../assets/mushroomHead.png";
import logo from './/../assets/dogHead.png';
import Avatar from "./Avatar";
import Logout from "./Logout";




function Header() {
    const { user } = useMoralis();
    return (
        <div>
            <div className=" sticky top-0 z-10 text-white">
                <div className="relative h-25 w-24 mx-auto  lg:inline-grid">
                    <Logout logoutOnPress/>
                </div>

                <div className="text-left lg:text-center p-1 mt-0">
                    <div className="h-48 w-48 relative lg:mx-auto border-indigo-50 border-7">
                        <Avatar />
                    </div>
                    <h1 className="text-5xl m-3"> Welcome to Global Chat </h1>
                    <h2>@username :  {user.getUsername()}</h2>                                 
                </div>
            </div>
        </div>
    )
}

export default Header
