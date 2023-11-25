import './Massagebox.css'
import Massage from '../Massage/Massage';
import Panel from '../Panel/Panel';
import Loading from '../Loading/Loading'
import { useChat } from '../../contexts/ChatContext';

function Massagebox() {
    const { state } = useChat();
    const messages = state;
    let lastComponent = 'panel'

    return (<div className="massagebox">
        {
            console.log(messages, "I am from MassageBox")
        }
        {
            messages && messages.map((message, index) => {

                if (message.sender === 'user') {
                    lastComponent = 'user'
                    return (<Massage key={index} sender={message.sender} text={message.text} />)
                }
                else {
                    if (message.sender === 'Ai') {
                        lastComponent = 'panel'
                    }
                    return (<Panel key={index} sender={message.sender} urls={message.urls} />)
                }

            }
            )
        }
        {
            (lastComponent === 'user') ? <Loading /> : ''
        }
    </div>)
}

export default Massagebox;