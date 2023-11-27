import { ChatProvider } from "../../contexts/ChatContext";
import Massagebox from "../Massagebox/Massagebox";
import Inoutbox from "../Inputbox/Inputbox";
import { WaitProvider } from "../../contexts/WaitContext";
import './Display.css'

function Display() {
    return (
        <ChatProvider>
            <WaitProvider>
            <div className="display">
                <Massagebox />
                <Inoutbox />
                </div>
            </WaitProvider>
        </ChatProvider>)
}


export default Display;