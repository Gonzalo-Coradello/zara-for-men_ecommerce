import './ItemListContainer.css'

const ItemListContainer = ( {saludo} ) => {
    return (
        <div className='item-list-container'>
            <h2>{saludo}</h2>
        </div>
    )
}

export default ItemListContainer