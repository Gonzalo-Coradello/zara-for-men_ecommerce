import './Loader.css'

const Loader = ({msg = "cargando"}) => {
    return <div className='loader-container'>
        <h2 className='loader'>{msg}</h2>
    </div>
}

export default Loader