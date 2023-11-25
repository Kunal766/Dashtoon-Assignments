import './Massage.css'
function Massage(props) {

    return (<div className="massage">
        <span>User :</span> <span>{props.text}</span>
    </div>)
}

export default Massage;