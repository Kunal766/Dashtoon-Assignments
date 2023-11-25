import './Massagebox.css'
import Massage from '../Massage/Massage';
import Panel from '../Panel/Panel';
import { useChat } from '../../contexts/ChatContext';

function Massagebox() {
    const { state } = useChat();
    const messages = state;

    return (<div className="massagebox">
        {
            messages && messages.map((message, index) => {
                console.log(message)

                if (message.sender === 'user') {
                    return (<Massage key={index} sender={message.sender} text={message.text} />)
                }
                else {
                    return (<Panel key={index} />)
                }

            }
            )
        }
    </div>)
}

export default Massagebox;