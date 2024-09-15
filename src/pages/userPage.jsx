import { Link } from "react-router-dom"

export default () => {
    return (
        <>
            <h2> Страница Пользователя </h2>
            <Link to="/auth/register">Регистрация</Link>
            <Link to="/auth/login">Вход</Link>
        </>
    )
}