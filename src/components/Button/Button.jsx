import './Button.css'

export default ({ onActionCallback, text, fullWidth }) => {
    return (
        <button onClick={() => onActionCallback()} className={(fullWidth) ? 'fullWidth' : ''} >{text}</button>
    )
}