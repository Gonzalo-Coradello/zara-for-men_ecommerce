import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect } from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'
import useAsync from '../../hooks/useAsync'
import Footer from '../Footer/Footer'

const ItemListContainer = () => {

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = categoryId ? `${categoryId.toUpperCase()} | ZARA` : 'TODOS LOS PRODUCTOS | ZARA'
    })


    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])


    if(loading) {
        return <Loader />
    }

    if(error){
        return <h2>{error}</h2>
    }
    
    return (
        <>
            <section className='shop'>
                <div className='container'>
                    <ItemList products={products} />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ItemListContainer