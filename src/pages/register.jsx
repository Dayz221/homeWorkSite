import { useEffect, useState } from "react"
import Button from "../components/Button/Button.jsx"
import Input from "../components/Input/Input.jsx"
import '../styles/register.css'

export default () => {
    const [userPhoto, setUserPhoto] = useState('https://placehold.co/400')

    useEffect(() => {
        if (window.Telegram.WebApp && window.Telegram.WebApp.user && window.Telegram.WebApp.user.photo_url) {
            setUserPhoto(window.Telegram.WebApp.user.photo_url)
        }
    }, [])

    return (
        <div className="container">
            <h2 className="mainLable">Регистрация</h2>

            <div className="user_info">
                <div className="image_container">
                    <img src={userPhoto} />
                </div>
            </div>

            <div>{window.Telegram.WebApp.user.photo_url}</div>

            <Input type="password" placeholder="Введите пароль" />
            <Button text="Зарегистрироваться" fullWidth />
        </div>
    )
}