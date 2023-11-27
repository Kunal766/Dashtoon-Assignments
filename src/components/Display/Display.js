import { ChatProvider } from "../../contexts/ChatContext";
import Massagebox from "../Massagebox/Massagebox";
import Inoutbox from "../Inputbox/Inputbox";
import { WaitProvider } from "../../contexts/WaitContext";
import './Display.css'

function Display() {
    return (
        <WaitProvider>
        <ChatProvider>   
            <div className="display">
                <Massagebox />
                <Inoutbox />
                </div>
            </ChatProvider>
        </WaitProvider>)
}


export default Display;