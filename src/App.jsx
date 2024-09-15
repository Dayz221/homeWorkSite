import './app.css'

export default () => {
  const tg = window.Telegram.WebApp

  return (
    <>
      {tg.initDataUnsafe.user.id ?
        <>
          <h2>User: {tg.initDataUnsafe.user.id}</h2>
          <h2>First Name: {tg.initDataUnsafe.user.first_name}</h2>
          <h2>Username: {tg.initDataUnsafe.user?.username}</h2>
        </>
      :
      <h2> Данные пользователя не найдены </h2>  
    }
    </>
  )
}
