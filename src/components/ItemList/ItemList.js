import './ItemList.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { useParams, useNavigate } from 'react-router-dom'
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = categoryId ? `${categoryId.toUpperCase()} | ZARA` : 'TODOS LOS PRODUCTOS | ZARA'
    })

    useEffect(() => {

        setLoading(true)

        const collectionRef = collection(db, 'products')
        const productsRef = categoryId 
            ? query(collectionRef, where('category', '==', categoryId))
            : query(collectionRef, orderBy('order'))

        getDocs(productsRef)
            .then(res => {
                const productsAdapted = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
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
    <>
        <h2 className='shop__title'>{categoryId === 'buzos' ? 'buzos y camperas' : categoryId || 'Nuestros productos'}</h2>
        <div className='products'>
            { products.map((prod => <div onClick={() => navigate(`/detail/${prod.id}`)} key={prod.id}><Item {...prod} /></div>) )}
        </div>
    </>
    
)}
    

export default ItemList