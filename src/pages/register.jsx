import Button from "../components/Button/Button.jsx"
import '../styles/register.css'

export default () => {
    return (
        <div className="container">
            <h2 className="mainLable">Регистрация</h2>
 
            <Button text="Зарегистрироваться" fullWidth />
        </div>
    )
}