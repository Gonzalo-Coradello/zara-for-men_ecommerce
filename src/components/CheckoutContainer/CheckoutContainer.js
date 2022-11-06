import './CheckoutContainer.css'
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../services/firebase/firestore/orders"
import Checkout from '../Checkout/Checkout'
import Form from "../Form/Form"

const CheckoutContainer = () => {

    const [ loading, setLoading ] = useState(false)
    const [ checkoutStatus, setCheckoutStatus ] = useState()
    const [ orderId, setOrderId ] = useState()
    const [ OutOfStockList, setOutOfStockList ] = useState()
    const [ errorMsg, setErrorMsg ] = useState()
    const { cart, total, clearCart, removeItemsFromCheckout } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'CHECKOUT | ZARA'
    })

    const handleCheckout = ({ name, email, phone }) => {
        setLoading(true)
        const cartMap = cart.map(prod => {
            const { images: deletedImg, stock: deletedStock, selectedSize: deletedSize, ...restCart } = prod
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

        const idsArray = outOfStock.map(item => item.id)
        
        removeItemsFromCheckout(idsArray)
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
        return <section className='checkout container'><h2>Se está generando la orden</h2></section>
    }

    return (
        <section className="checkout container">
            <h2>Checkout</h2>
            <div>
                { checkoutStatus ?
                <Checkout checkoutStatus={checkoutStatus} orderId={orderId} OutOfStockList={OutOfStockList} errorMsg={errorMsg} /> :
                <Form handleCheckout={handleCheckout} />
                }
            </div>
        </section>
    )
    
    
}

export default CheckoutContainer