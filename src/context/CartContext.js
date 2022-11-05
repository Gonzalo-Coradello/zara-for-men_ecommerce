import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0
})


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        const totalPrice = getTotal()
        setTotalQuantity(totalQty)
        setTotal(totalPrice)
    }, [cart]) // eslint-disable-line

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

    const removeItemsFromCheckout = (idsArray) => {

        const filterCart = (id) => {
            const cartWithoutProducts = cart.filter(prod => prod.id !== id)
            setCart(cartWithoutProducts)
        }

        idsArray.forEach(id => filterCart(id))
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

    const getTotal = () => {
        let totalPrice = 0

        cart.forEach(prod => {
            totalPrice += prod.price * prod.quantity
        })

        return totalPrice
    }

    const clearCart = () => {
        setCart([])
    }

    const updateQuantityFromCart = (id, color, quantity) => {
        const productToUpdate = cart.find(prod => (prod.id === id && prod.selectedColor === color))

        const updatedProd = {
            ...productToUpdate,
            quantity: quantity,
        }
    
        setCart(prevCart => prevCart.map(prod => (prod.id === id && prod.selectedColor === color) ? updatedProd : prod))
    }

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clearCart, updateQuantityFromCart, removeItemsFromCheckout }}>
            {children}
        </CartContext.Provider>
    )
}