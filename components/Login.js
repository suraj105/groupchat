import Image from "next/image";
import backgroundImg from './/../assets/bg.jpg';
import logo from './/../assets/dogHead.png';
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative text-white">
            <h1>yo homeboy , this is login</h1>

            <div className="flex flex-col absolute z-10 h-4/6 w-full items-center justify-center space-y-4 ">
            <p className="bg-none rounded-lg pt-1 font-bold animate animate-pulse text-6xl">Welcome</p>
            <p className="bg-none rounded-lg pb-1 font-bold animate animate-bounce text-3xl">To the Metaverse</p>

                <Image className = "obSject-cover m-6 rounded-full animate-none" src = {logo} height={200} width={200}  />
              
                <button onClick = {authenticate}
                className="   rounded-lg p-5 font-bold animate animate-none text-4xl hover:text-lime-400"> Login with wallet </button>
            </div>

            <div className="w-full h-screen">
                <Image src={backgroundImg} layout="fill" objectFit="cover" />
            </div>

        </div>
    );
}

export default Login;
