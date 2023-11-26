import './Panel.css'
import ChatBubble from '../ChatBubble/ChatBubble';
import { useState, useRef } from 'react';
import ShareableImage from '../ShareableImage/ShareableImage';

function Panel({ sender, urls }) {

    const [chatInputs, setChatInputs] = useState([])
    const [chatInput, setChatInput] = useState('')
    const [sharing, setSharing] = useState(false)

    function handleSendMessage() {
        setChatInputs([...chatInputs, chatInput])
        setChatInput('')
    }

    const myInputRef = useRef();
    return (
        <div className="panel">
            <input placeholder='create chat bulbble' onChange={(e) => {
                setChatInput(e.target.value)
            }} value={chatInput} /> <button className="send-button2" onClick={handleSendMessage}>Send</button>
            <button className="send-button2" onClick={() => {
                setSharing(!sharing)
            }}>Share</button>
            {
                sharing && <ShareableImage element={myInputRef.current} />
            }
            <div className='toBeShared' ref={myInputRef} style={{ width: '100%', height: '100%', position: 'relative', lineHeight: 0.5 }}>
                {
                    chatInputs.map((chat, index) => {
                        return (<ChatBubble massage={chat} key={index} />)
                    })
                }
                <div className='glary'>
                    {
                        urls && urls.map((url, index) => {
                            return (<img key={index} src={url} alt='comicimage' />)
                        })
                    }
                </div>
                <p style={{margin:'20px'}}>Kunal Nayak</p>
            </div>
        </div>
    )
}

export default Panel;