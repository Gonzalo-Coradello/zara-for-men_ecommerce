import { getDocs, getDoc, collection, doc, query, where, orderBy } from 'firebase/firestore'
import { db } from ".."
import { firestoreProductAdapter } from '../../../adapter/productAdapter'


export const getProducts = ( categoryId ) => {
    return new Promise((resolve, reject) => {
        const collectionRef = collection(db, 'products')
        const productsRef = categoryId 
            ? query(collectionRef, where('category', '==', categoryId))
            : query(collectionRef, orderBy('order'))

        getDocs(productsRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    return firestoreProductAdapter(doc)
                })
                resolve(productsAdapted)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
        
        const docRef = doc(db, 'products', productId)

        getDoc(docRef)
            .then(res => {
                const data = res.data()
                const productAdapted = { id: res.id, ...data }
                resolve(productAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}