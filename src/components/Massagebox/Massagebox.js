import './Massagebox.css'
import Massage from '../Massage/Massage';
import Panel from '../Panel/Panel';
import Loading from '../Loading/Loading'
import { useChat } from '../../contexts/ChatContext';
import { useWait } from '../../contexts/WaitContext';

function Massagebox() {
    const { state } = useChat();
    const dispatchwait = useWait().dispatchwait;
    const messages = state;
    let lastComponent = 'panel'

    return (<div className="massagebox">
        {
            messages && messages.map((message, index) => {

                if (message.sender === 'user') {
                    lastComponent = 'user'
                    dispatchwait({ type: 'CHANGETOFALSE', message: false })
                    return (<Massage key={index} sender={message.sender} text={message.text} />)
                }
                else {
                    if (message.sender === 'Ai') {
                        lastComponent = 'panel'
                        dispatchwait({ type: 'CHANGETOTRUE', message: true })

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