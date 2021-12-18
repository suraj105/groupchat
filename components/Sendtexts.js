import { useMoralis } from "react-moralis"
import { useState } from "react";

function Sendtexts({ endOfMessagesRef }) {
const {user, Moralis } = useMoralis();
const [message , setMessage ] = useState("");

const sendText = (e) => {
    e.preventDefault();

    if(!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages.save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
    }).then((message) => {

    },
    (error) => {
        console.log(error.messages)
    }
    )
    endOfMessagesRef.current.scrollIntoView({ behaviour: "smooth"});

    setMessage("");
};

    return (
                <form className="flex w-4/12 fixed  bottom-12 px-5 py-3 bg-cyan-900 rounded-lg shadow-xl  bg-opacity-20 shadow-inner-20 border-2 border-slate-600 ">
                <input className="text-2xl flex-grow outline-none bg-transparent text-neutral-50 pr-2
                " type="text" 
                value = {message}
                onChange={(e) => setMessage(e.target.value) }
                placeholder="Type your message"/>
                <button type ="submit" onClick = {sendText} className="font-bold  text-white text-2xl  opacity-50 bg-none p-2 rounded-full ml-5 hover:opacity-100 mr-5">Send</button>
            </form>
          
    )
}

export default Sendtexts
