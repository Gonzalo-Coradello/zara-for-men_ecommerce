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
        if(!isInCart(productToAdd)) {
            setCart([...cart, productToAdd])
        }
        else{
            updateQuantity(productToAdd.id, productToAdd.quantity, productToAdd.selectedColor)
        }
    }

    const isInCart = ({ id, selectedColor }) => {
        return cart.some(prod => (prod.id === id && prod.selectedColor === selectedColor))
    }

    const removeItem = (id, color) => {
        const cartWithoutProduct = cart.filter(prod => (prod.id !== id || prod.selectedColor !== color))
        setCart(cartWithoutProduct)
    }

    const updateQuantity = (id, qty, color) => {
        const productToUpdate = cart.find(prod => (prod.id === id && prod.selectedColor === color))

        const updatedProd = {
            ...productToUpdate,
            quantity: productToUpdate.quantity += qty,
        }
    
        setCart(prevCart => prevCart.map(prod => (prod.id === id && prod.selectedColor === color) ? updatedProd : prod))
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