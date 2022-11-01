import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services/firebase/firestore/products'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = loading ? 'Cargando' : `${product.title.toUpperCase()} | ZARA`
    })

    useEffect(() => {

       getProduct(productId)
            .then(product => setProduct(product))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [productId])

    if(loading) {
        return <Loader />
    }

    return (
        <div className='item-detail-container container'>
            <ItemDetail { ...product } />
        </div>
    )
}

export default ItemDetailContainer