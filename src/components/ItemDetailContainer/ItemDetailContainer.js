import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect } from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services/firebase/firestore/products'
import useAsync from '../../hooks/useAsync'
import Footer from '../Footer/Footer'

const ItemDetailContainer = () => {

    const { productId } = useParams()

    useEffect(() => {
        document.title = loading ? 'Cargando' : `${product.title.toUpperCase()} | ZARA`
    })

    const getProductById = () => getProduct(productId)

    const { data: product, error, loading} = useAsync(getProductById, [productId])

    if(loading) {
        return <Loader />
    }

    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <>
            <main>
                <section className='item-detail-container container'>
                    <ItemDetail { ...product } />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ItemDetailContainer