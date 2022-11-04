import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import Form from "../Form/Form"
import { createOrder } from "../../services/firebase/firestore/orders"
import { Link } from "react-router-dom"

const Checkout = () => {

    const [ loading, setLoading ] = useState(false)
    const [ checkoutStatus, setCheckoutStatus ] = useState()
    const [ orderId, setOrderId ] = useState()
    const [ OutOfStockList, setOutOfStockList ] = useState()
    const [ errorMsg, setErrorMsg ] = useState()
    const { cart, total, clearCart, removeItemFromCheckout } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'CHECKOUT | ZARA'
    })

    const handleCheckout = ({ name, email, phone }) => {
        setLoading(true)
        const cartMap = cart.map(prod => {
            const { images: deletedImg, stock: deletedStock, ...restCart } = prod
            return restCart
        })

        const order = {
            client: {
                name,
                email,
                phone
            },
            items: cartMap,
            total: total,
        }

        createOrder(order, cart, finishCheckout, rejectCheckout, handleError)
    }

    const finishCheckout = (order) => {
        clearCart()

        setTimeout(() => {
            navigate('/products')
        }, 5000)

        setCheckoutStatus('success')
        setLoading(false)
        setOrderId(order)
    }

    const rejectCheckout = (outOfStock) => {

        outOfStock.forEach(item => {
            removeItemFromCheckout(item.id)
        })     

        setCheckoutStatus('outOfStock')
        setOutOfStockList(outOfStock)
        setLoading(false)     
    }

    const handleError = (error) => {
        setCheckoutStatus('error')
        setErrorMsg(error)
        setLoading(false)
    }

    if(loading) {
        return <h2>Se está generando la orden</h2>
    }

    if(checkoutStatus === 'success') {
        return (
            <div>
                <h2>¡Muchas gracias!</h2>
                <p>Su orden ha sido generada exitosamente</p>
                <p>ID de la orden: {orderId}</p>
            </div>
        )
    }

    if(checkoutStatus === 'outOfStock') {
        return (
            <div>
                <h2>Los siguientes productos se encuentran fuera de stock:</h2>
                {OutOfStockList.map(prod => {
                    return (
                        <ul key={prod.id}>
                            <li>{prod.title}</li>
                        </ul>
                    )
                })}
                <Link to='/cart'>Volver al carrito</Link>
            </div>
        )
    }

    if(checkoutStatus === 'error') {
        return (
            <>
                <h2>Ha ocurrido un error</h2>
                <p>{errorMsg.toString()}</p>
            </>
        )
        
    }

    return (
        <div>
            <h2>Checkout</h2>
            <h2>Checkout</h2>
            <h2>Checkout</h2>
            <h2>Checkout</h2>
            <Form handleCheckout={handleCheckout}/>
        </div>
    )
}

export default Checkout