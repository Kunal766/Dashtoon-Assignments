import './Inputbox.css'
import { useChat } from '../../contexts/ChatContext';
import { useWait } from '../../contexts/WaitContext';
import { useState } from 'react';
import query from '../../utilities/getImage';

function Inoutbox() {
    // user input state
    const [userInput, setUserInput] = useState('');
    //handling user-input-change
    const handleChange = (e) => {
        setUserInput(e.target.value);

    };

    //massage context
    const dispatch = useChat().dispatch;
    const { state, dispatchwait } = useWait();

    //handle the function passed by Display onclick event of botton
    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            // Add the user message to the state
            dispatch({ type: 'ADD_MESSAGE', message: { sender: 'user', text: userInput } });

            //call api for imges 10 times
            const urls = [];

            const callapitentimes = async () => {
                for (let i = 0; i < 10; i++) {
                    await query({ "inputs": userInput }).then((response) => {
                        const imageUrl = URL.createObjectURL(response);
                        urls.push(imageUrl);
                    })
                    if (i === 0) {
                        // Add image urls to state
                        dispatch({ type: 'ADD_MESSAGE', message: { sender: 'Aicontinuing', urls: urls } });
                    }
                    else if (i < 9) {
                        // Edit image urls to state
                        dispatch({ type: 'EDIT_LAST_MASSAGE', message: { sender: 'Aicontinuing', urls: urls } });
                    }
                    else {
                        // End to talk with ai
                        dispatch({ type: 'EDIT_LAST_MASSAGE', message: { sender: 'Ai', urls: urls } });
                    }
                }
            }
            callapitentimes();
            setUserInput('');
            dispatchwait({ type: 'CHANGETOTRUE', message: !state });
        }
    };






    return (<div className="inputbox">
        <input type="text" className="user-input" placeholder="Massage Dashtoon..." onChange={handleChange} value={userInput} />
        {state && <button className="send-button">Wait Tile This comic is Fully Complite </button>}
        {!state && <button className="send-button" onClick={handleSendMessage}>Send</button>}
    </div>)
}

export default Inoutbox;