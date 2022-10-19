import './ItemList.css'
import Item from '../Item/Item'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { useParams, useNavigate } from 'react-router-dom'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        setLoading(true)

        asyncFunction( categoryId ).then((response) => {
            setProducts(response)
        }).finally(() => setLoading(false))
    }, [categoryId])

    if(loading) {
        return <Loader />
    }

    return (
    <>
        <h2 className='shop__title'>{categoryId === 'buzos' ? 'buzos y camperas' : categoryId || 'Nuestros productos'}</h2>
        <div className='products'>
            { products.map((prod => <div onClick={() => navigate(`/detail/${prod.id}`)} key={prod.id}><Item {...prod} /></div>) )}
        </div>
    </>
    
)}

export default ItemList