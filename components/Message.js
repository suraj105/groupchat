import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import TimeAgo from "timeago-react"



function Message({ message}) {
    const { user } = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get("ethAddress");

    return (
        <div className={`flex items-end space-x-2 relative ${
            isUserMessage && "justify-end"
        }`}>

            <div className={`relative h-10 w-10 ${
                isUserMessage && "order-last ml-2"
            }`}>
                <Avatar username= {message.get("username")} />
            </div>

         <div 
             className={`flex space-x-3 py-2 rounded-lg ${
                 isUserMessage
                 ? "rounden-br-none bg-blue-400  text-black px-3"
                 : "rounded-bl-none bg-green-400 text-black px-3"
             }`}

             >
            <p> {message.get("message")}</p>
        </div>
        <TimeAgo className={`text-[10px] italic text-gray-400 ${
            isUserMessage && "order-first"
        } `}
        datetime={message.createdAt}
        />
        </div>
       
    )
}

export default Message
