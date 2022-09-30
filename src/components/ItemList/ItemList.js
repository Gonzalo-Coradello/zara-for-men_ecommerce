import './ItemList.css'
import Item from '../Item/Item'
import { getProducts } from '../../asyncMock'
import { useEffect, useState } from 'react'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response)
        }).finally(() => setLoading(false))
    }, [products])

    if(loading) {
        return <h2>Cargando</h2>
    }

    return (
    <>
        <h2 className='shop__title'>Remeras</h2>
        <div className='products'>
            { products.map((prod => <Item key={prod.id} {...prod} />) )}
        </div>
    </>
    
)}

export default ItemList