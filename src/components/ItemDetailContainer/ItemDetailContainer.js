import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = loading ? 'Cargando' : `${product.title.toUpperCase()} | ZARA`
    })

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef)
            .then(res => {
                const data = res.data()
                const productAdapted = { id: res.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
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