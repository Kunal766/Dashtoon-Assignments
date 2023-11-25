import './Massage.css'
function Massage(props) {

    return (<div className="massage">
        <div className="message bot-message">
            <p>{props.text}</p>
        </div>
    </div>)
}

export default Massage;