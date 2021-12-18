import { useRef } from "react";
import { useMoralis , useMoralisQuery} from "react-moralis"
import Message from "./Message";
import Sendtexts from "./Sendtexts";

const MINS_ =15;

function Texts() {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').greaterThan
        ('createdAt', new Date(Date.now() - 1000 * 60 * MINS_)
        ),
        [],
        {
            live:true
        }
        )

    return (
        <div className="text-white pb-50  w-10/12 mx-auto ">

            <div className="space-y-10 pb-20">
                {data.map(message =>(
                    <Message  key={message.id} message={message}/>
                ))}
            </div>

            <div className="flex justify-center " >
                <Sendtexts endOfMessagesRef={endOfMessagesRef}/>
            </div>

            <div ref={ endOfMessagesRef } className="text-center text-emerald-50 mt-10">
            </div>

            
        </div>
    )
}

export default Texts
