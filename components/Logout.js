import { useMoralis } from "react-moralis";
import Image from "next/image";
import logoutpic from './/../assets/logout.png'

function Logout({logoutOnPress}) {
    const {logout} = useMoralis();

    return (
        <div className="absolute top-20  left-20 h-24 w-24 ">
                 <Image 
        className="opacity-50 rounded-full bg-none cursor-pointer hover:opacity-80 "
        src = {logoutpic} onClick={() => 
            logoutOnPress && logout()
        } layout="fill"/>
        </div>
       
    )
}

export default Logout
