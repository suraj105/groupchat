import { useMoralis } from "react-moralis"
import Image from "next/image";

function Avatar({ usename }) {
    const {user} = useMoralis();
    return (
       <Image 
       className="rounded-full bg-black"
       src = {`https://avatars.dicebear.com/api/pixel-art/${
           user || user.get("username")}.svg`}
       layout ="fill"
       />
    )
}

export default Avatar
