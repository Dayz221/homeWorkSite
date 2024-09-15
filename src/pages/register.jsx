import Button from "../components/Button/Button.jsx"
import Input from "../components/Input/Input.jsx"
import '../styles/register.css'

export default () => {
    return (
        <div className="container">
            <h2 className="mainLable">Регистрация</h2>

            <Input type="password" placeholder="Введите пароль" />
 
            <Button text="Зарегистрироваться" fullWidth />
        </div>
    )
}