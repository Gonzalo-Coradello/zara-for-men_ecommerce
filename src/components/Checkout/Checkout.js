import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import Form from "../Form/Form"
import { createOrder } from "../../services/firebase/firestore/orders"

const Checkout = () => {

    const [ loading, setLoading ] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

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

        createOrder(order, cart, finishCheckout, rejectCheckout)
    }

    const finishCheckout = () => {
        clearCart()

        setTimeout(() => {
            navigate('/products')
        }, 3000)

        setLoading(false)
    }

    const rejectCheckout = () => {
        console.log('Hay productos que están fuera de stock')
        setLoading(false)

    }


        // Ver qué hacer cuando algún producto se queda sin stock (outOfStock). Se puede mostrar una notificación y retirar el producto del carrito


    if(loading) {
        return <h2>Se está generando la orden</h2>
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