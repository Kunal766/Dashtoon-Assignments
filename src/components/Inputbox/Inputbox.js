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
        console.log("chaged to", userInput)

    };

    //massage context
    const dispatch = useChat().dispatch;
    const { waitstate, dispatchwait } = useWait();

    //handle the function passed by Display onclick event of botton
    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            console.log("waitstate :", waitstate)
            dispatchwait({ type: 'CHANGETOTRUE' });
            console.log("waitstate :", waitstate)

            // Add the user message to the state
            dispatch({ type: 'ADD_MESSAGE', message: { sender: 'user', text: userInput } });

            console.log('I am from Input Container dispatch')

            //call api for imges 10 times
            const urls = [];

            const callapitentimes = async () => {
                for (let i = 0; i < 10; i++) {
                    await query({ "inputs": userInput }).then((response) => {
                        console.log(response);
                        const imageUrl = URL.createObjectURL(response);
                        console.log(imageUrl);
                        urls.push(imageUrl);
                    })
                    if (i === 0) {
                        // Add image urls to state
                        dispatch({ type: 'ADD_MESSAGE', message: { sender: 'Aicontinuing', urls: urls } });
                        console.log('I am from Input Container dispatch')

                    }
                    else if (i < 9) {
                        // Edit image urls to state
                        dispatch({ type: 'EDIT_LAST_MASSAGE', message: { sender: 'Aicontinuing', urls: urls } });
                        console.log('I am from Input Container dispatch')

                    }
                    else {
                        // End to talk with ai
                        dispatch({ type: 'EDIT_LAST_MASSAGE', message: { sender: 'Ai', urls: urls } });
                        console.log('I am from Input Container dispatch')

                    }
                }
            }
            callapitentimes();
            setUserInput('');
        }
    };






    return (<div className="inputbox">
        <input type="text" className="user-input" placeholder="Massage Dashtoon..." onChange={handleChange} value={userInput} />
        {waitstate && <button className="send-button">Wait Tile This comic is Fully Complite </button>}
        {(!waitstate) && <button className="send-button" onClick={handleSendMessage}>Send</button>}
    </div>)
}

export default Inoutbox;