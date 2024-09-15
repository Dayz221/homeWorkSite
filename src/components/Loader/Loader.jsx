import './Loader.css'

export default ({ state }) => {
    return (
        <div class="loader" style={state ? {} : {display:"none"} }>
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
    )
}