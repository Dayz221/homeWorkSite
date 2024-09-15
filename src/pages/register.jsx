import { useEffect, useState } from "react"
import Button from "../components/Button/Button.jsx"
import Input from "../components/Input/Input.jsx"
import '../styles/register.css'
import axios from "axios"
import Loader from "../components/Loader/Loader.jsx"

const botToken = '7418386580:AAGfabRzlGwRS7nbj4w7ISZrSgQouzD7Msg';

export default () => {
    const [userPhoto, setUserPhoto] = useState('https://placehold.co/400')
    const [isLoading, setLoading] = useState(true)

    useEffect(async () => {
        const fileId = await getUserProfilePhotos(window.Telegram.WebApp.initDataUnsafe.user.id)

        if (fileId) {
            const fileUrl = await getFile(fileId);
    
            if (fileUrl) setUserPhoto(fileUrl)
            
            setTimeout(() => setLoading(false), 10000)
        }
    }, [])

    return (
        <div>
            <div className="container" style={isLoading ? {display:"none"} : {}}>
                <h2 className="mainLable">Регистрация</h2>

                <div className="user_info">
                    <div className="image_container">
                        <img src={userPhoto} />
                    </div>
                </div>

                <Input type="password" placeholder="Введите пароль" />
                <Button text="Зарегистрироваться" fullWidth />
            </div>
            
            <Loader state={isLoading} />
        </div>
    )
}


async function getUserProfilePhotos(userId) {
    const url = `https://api.telegram.org/bot${botToken}/getUserProfilePhotos?user_id=${userId}`

    try {
        const response = await axios.get(url)
        const photos = response.data.result.photos

        if (photos.length > 0) {
            const fileId = photos[0][0].file_id
            return fileId
        } else {
            return null
        }
    } catch (error) {
        console.error('Ошибка получения фотографий профиля:', error)
    }
}

async function getFile(fileId) {
    const url = `https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`

    try {
        const response = await axios.get(url)
        const filePath = response.data.result.file_path
        const fileUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`

        return fileUrl
    } catch (error) {
        console.error('Ошибка получения файла:', error)
    }
}