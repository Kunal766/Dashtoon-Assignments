import './Inputbox.css'
function Inoutbox() {

    return (<div className="inputbox">
        <input type="text" className="user-input" placeholder="Massage Dashtoon..." />
        <button className="send-button" onclick="sendMessage()">Send</button>
    </div>)
}

export default Inoutbox;