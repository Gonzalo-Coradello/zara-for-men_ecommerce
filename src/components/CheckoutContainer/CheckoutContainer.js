import './CheckoutContainer.css'
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { createOrder } from "../../services/firebase/firestore/orders"
import Checkout from '../Checkout/Checkout'
import Form from "../Form/Form"
import Loader from '../Loader/Loader'
import OrderSummary from '../OrderSummary/OrderSummary'
import Footer from '../Footer/Footer'

const CheckoutContainer = () => {

    const [ loading, setLoading ] = useState(false)
    const [ checkoutStatus, setCheckoutStatus ] = useState()
    const [ orderId, setOrderId ] = useState()
    const [ OutOfStockList, setOutOfStockList ] = useState()
    const [ errorMsg, setErrorMsg ] = useState()
    const { cart, total, clearCart, removeItemsFromCheckout } = useContext(CartContext)

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

        // setTimeout(() => {
        //     navigate('/products')
        // }, 5000)

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
        return <Loader msg="Se está generando la orden" />
    }

    return (
        <>
            <main>
                <section className="checkout container">
                    <h2>Checkout</h2>
                    <div>
                        { checkoutStatus ?
                        <Checkout checkoutStatus={checkoutStatus} orderId={orderId} OutOfStockList={OutOfStockList} errorMsg={errorMsg} /> :
                        <div className='checkout__form'>
                            <Form handleCheckout={handleCheckout} />
                            <OrderSummary cart={cart} total={total} />
                        </div>
                        }
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
    
    
}

export default CheckoutContainer