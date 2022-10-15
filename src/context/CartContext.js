import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    console.log(cart)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
        else{
            updateQuantity(productToAdd.id, productToAdd.quantity)
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const updateQuantity = (id, quantity) => {
        const productToUpdate = cart.find(prod => prod.id === id)

        const updatedProd = {
            ...productToUpdate,
            quantity: productToUpdate.quantity += quantity
        }
    
        setCart(prevCart => prevCart.map(prod => prod.id === id ? updatedProd : prod))
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}