import { getDocs, addDoc, collection, query, where, documentId, writeBatch, serverTimestamp } from 'firebase/firestore'
import { db } from ".."

export const createOrder = async (order, cart, finishCheckout, rejectCheckout) => {
    
    try {

        order.date = serverTimestamp()

        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsAddedFromFirestore

        docs.forEach(doc => {
            const docData = doc.data()
            const stockDb = docData.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push({ id: doc.id, ...docData })
            }
        })

        if(outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, order) 

            console.log(`El id de su orden es: ${orderAdded.id}`)

            finishCheckout()

        } else {

            rejectCheckout()
        }
    } catch (err) {
        console.log(err)
    } 
}