export const firestoreProductAdapter = (doc) => {

    const data = doc.data()

    const adaptedProduct = {
        id: doc.id,
        title: data.title,
        images: data.images,
        quantity: data.quantity,
        colors: data.colors,
        defaultColor: data.defaultColor,
        selectedColor: data.selectedColor,
        images: data.images,
        stock: data.stock,
        description: data.description,
        price: data.price,
        order: data.order
    }

    return adaptedProduct
}