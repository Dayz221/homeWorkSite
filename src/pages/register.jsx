import { useEffect, useState } from "react"
import Button from "../components/Button/Button.jsx"
import Input from "../components/Input/Input.jsx"
import '../styles/register.css'
import axios from "axios"
import Loader from "../components/Loader/Loader.jsx"
import { Select, Option } from "../components/Select/Select.jsx"

const botToken = '7418386580:AAGfabRzlGwRS7nbj4w7ISZrSgQouzD7Msg'
const apiUrl = 'https://home-work-api.ru/api'

export default () => {
    const [userPhoto, setUserPhoto] = useState('https://gb.ru/blog/wp-content/uploads/2022/07/gradienta-LeG68PrXA6Y-unsplash.jpg')
    const [isLoading, setLoading] = useState(true)
    const [groups, setGroups] = useState([
        {
            _id: 1,
            name: 1
        },
        {
            _id: 2,
            name: 2
        },
        {
            _id: 3,
            name: 3
        },
        {
            _id: 4,
            name: 4
        },
    ])

    useEffect(async () => {
        const fileId = await getUserProfilePhotos(window.Telegram.WebApp.initDataUnsafe.user.id)

        if (fileId) {
            const fileUrl = await getFile(fileId)
            if (fileUrl) setUserPhoto(fileUrl)
        }

        const _groups = await axios.get(apiUrl+'/groups')
        console.log(_groups.data.groups)
        // setGroups(_groups.data.groups)
        setTimeout(() => setLoading(false), 300)
    }, [])

    const user = window.Telegram.WebApp.initDataUnsafe.user

    return (
        <div style={{position: "relative"}}>
            <div className="container" style={isLoading ? {display:"none"} : {}}>
                <h2 className="mainLable">Регистрация</h2>

                <div className="user_info">
                    <div className="image_container">
                        <img src={userPhoto} />
                    </div>
                    <div className="user_info_block">
                        <div className="user_name">{ user.first_name + " " + user?.last_name }</div>
                        {user.username ? <div className="user_id">{"@" + user.username}</div> : null}
                    </div>
                </div>

                <Select>
                    {
                        groups.map(el => <Option key={el._id} >{ el.name }</Option>)
                    }
                </Select>

                <Input type="password" placeholder="Введите пароль" />
                <Input type="password" placeholder="Подтвердите пароль" />

                <Button text="Зарегистрироваться" fullWidth />
            </div>
            
            {isLoading ? <Loader /> : <></>}
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