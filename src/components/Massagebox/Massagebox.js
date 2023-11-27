import './Massagebox.css'
import Massage from '../Massage/Massage';
import Panel from '../Panel/Panel';
import Loading from '../Loading/Loading'
import { useChat } from '../../contexts/ChatContext';
import { useWait } from '../../contexts/WaitContext';
import { useEffect } from 'react';

function Massagebox() {
    const { state } = useChat();
    const dispatchwait = useWait().dispatchwait;
    const messages = state;
    let lastComponent = 'panel'

    useEffect(() => {
        console.log("lastComponent : ", lastComponent)
        console.log("useEffect IS colled")
        if (lastComponent === 'user') {
            dispatchwait({ type: 'CHANGETOTRUE', message: !state })
        }
        else {
            dispatchwait({ type: 'CHANGETOFALSE', message: !state })
        }

    }, [state])

    return (<div className="massagebox">
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