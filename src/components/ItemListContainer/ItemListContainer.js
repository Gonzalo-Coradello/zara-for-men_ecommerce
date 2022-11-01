import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        document.title = categoryId ? `${categoryId.toUpperCase()} | ZARA` : 'TODOS LOS PRODUCTOS | ZARA'
    })

    useEffect(() => {

        setLoading(true)

        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])


    if(loading) {
        return <Loader />
    }
    
    return (
        <section className='shop'>
            <div className='container'>
                <ItemList products={products} />
            </div>
        </section>
    )
}

export default ItemListContainer