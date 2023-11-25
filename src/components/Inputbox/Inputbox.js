import './Inputbox.css'
import { useChat } from '../../contexts/ChatContext';
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
    const { state, dispatch } = useChat();

    //handle the function passed by Display onclick event of botton
    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            // Add the user message to the state
            dispatch({ type: 'ADD_MESSAGE', message: { sender: 'user', text: userInput } });


            //call api for imges 10 times
            query(query({ "inputs": userInput }).then((response) => {

                console.log(response);
                const imageBytes = response
                const blob = new Blob([imageBytes], { type: 'image/jpeg' });
                const imageUrl = URL.createObjectURL(blob);
                console.log(imageUrl);

            }))


            setUserInput('');
        }
        console.log("put intput")
        console.log(userInput.trim())
        console.log(state)
    };




    return (<div className="inputbox">
        <input type="text" className="user-input" placeholder="Massage Dashtoon..." onChange={handleChange} value={userInput} />
        <button className="send-button" onClick={handleSendMessage}>Send</button>
    </div>)
}

export default Inoutbox;