const products = [
    {
        id: 1,
        title: "remera parche logo",
        category: "remeras",
        price: 5900,
        img: "/images/products/remeras-1_negro-1.jpg",
        stock: 21,
        description: "Camiseta de cuello redondo y manga corta. Aplicación de parche combinado a contraste en pecho.",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"},
            {color: "marino", code: "#0E0F27"}
        ]
    },
    {
        id: 2,
        title: "remera rayas heavy weight",
        category: "remeras",
        price: 6190,
        img: "/images/products/remeras-2_1.jpg",
        stock: 7,
        description: "",
        colors: []
    },
    {
        id: 3,
        title: "remera básica medium weight",
        category: "remeras",
        price: 5590,
        img: "/images/products/remeras-3_marron-1.jpg",
        stock: 34,
        description: "",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"},
            {color: "azul", code: "#15163C"},
            {color: "verde", code: "#153615"},
            {color: "marron", code: "#623C33"}
        ]
    },
    {
        id: 4,
        title: "polo básico",
        category: "remeras",
        price: 6190,
        img: "/images/products/remeras-4_blanco-1.jpg",
        stock: 15,
        description: "",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"}
        ]
    },
    {
        id: 5,
        title: "remera love",
        category: "remeras",
        price: 7700,
        img: "/images/products/remeras-5_1.jpg",
        stock: 17,
        description: "",
        colors: []
    },
    {
        id: 6,
        title: "remera contraste",
        category: "remeras",
        price: 7090,
        img: "/images/products/remeras-6_1.jpg",
        stock: 25,
        description: "",
        colors: []
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}