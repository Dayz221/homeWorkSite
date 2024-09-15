export default () => {
  const tg = window.Telegram.WebApp

  return (
    <>
      <h2>User: {tg.initDataUnsafe.user.id}</h2>
      <h2>First Name: {tg.initDataUnsafe.user.first_name}</h2>
      <h2>Photo: {tg.initDataUnsafe.user?.photourl}</h2>
      <h2>Username: {tg.initDataUnsafe.user?.username}</h2>
    </>
  )
}
