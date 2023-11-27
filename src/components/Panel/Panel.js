import './Panel.css'
import ChatBubble from '../ChatBubble/ChatBubble';
import { useState, useRef } from 'react';
import ShareableImage from '../ShareableImage/ShareableImage';

function Panel({ sender, urls }) {

    const [chatInputs, setChatInputs] = useState([])
    const [chatInput, setChatInput] = useState('')
    const [sharing, setSharing] = useState(false)

    function handleSendMessage() {
        if (chatInput.trim() !== '') {
            setChatInputs([...chatInputs, chatInput])
            setChatInput('')
        }
    }

    const myInputRef = useRef();
    return (
        <div className="panel">
            <div className='toBeShared' ref={myInputRef} style={{ width: '100%', height: '100%', position: 'relative', lineHeight: 0.5 }}>
                <div className='glary'>
                    {
                        urls && urls.map((url, index) => {
                            return (<img key={index} src={url} alt='comicimage' className='comicImage' />)
                        })
                    }
                </div>
                {
                    chatInputs.map((chat, index) => {
                        return (<ChatBubble massage={chat} key={index} />)
                    })
                }
            </div>
            <input placeholder='create chat bubble and drag it to your character' className='bubbleInput' onChange={(e) => {
                setChatInput(e.target.value)
            }} value={chatInput} /> <button className="bubblego" onClick={handleSendMessage}>Create Bubble</button>
            <button className="makecanvas" onClick={() => {
                setSharing(!sharing)
            }}>Create the Comic And Share it</button>
            {
                sharing && <ShareableImage refre={myInputRef.current} />
            }
        </div>
    )
}

export default Panel;