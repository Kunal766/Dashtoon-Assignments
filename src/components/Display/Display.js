import { ChatProvider } from "../../contexts/ChatContext";
import Massagebox from "../Massagebox/Massagebox";
import Inoutbox from "../Inputbox/Inputbox";
import './Display.css'

function Display() {
    return (
        <ChatProvider>
            <div className="display">
                <Massagebox />
                <Inoutbox />
            </div>
        </ChatProvider>)
}


export default Display;