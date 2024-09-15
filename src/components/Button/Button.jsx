import './Button.css'

export default ({ onActionCallback, text }) => {
    return (
        <button onClick={() => onActionCallback()}>{text}</button>
    )
}