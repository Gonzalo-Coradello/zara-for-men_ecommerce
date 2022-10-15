const products = [
    {
        id: "1",
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
        id: "2",
        title: "remera rayas heavy weight",
        category: "remeras",
        price: 6190,
        img: "/images/products/remeras-2_1.jpg",
        stock: 7,
        description: "Camiseta confeccionada en tejido de algodón compacto. Cuello redondo y manga corta.",
        colors: []
    },
    {
        id: "3",
        title: "remera básica medium weight",
        category: "remeras",
        price: 5590,
        img: "/images/products/remeras-3_marron-1.jpg",
        stock: 34,
        description: "Camiseta regular fit confeccionada en tejido con acabado mercerizado. Cuello redondo acabado en rib y manga corta.",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"},
            {color: "azul", code: "#15163C"},
            {color: "verde", code: "#153615"},
            {color: "marron", code: "#623C33"}
        ]
    },
    {
        id: "4",
        title: "polo básico",
        category: "remeras",
        price: 6190,
        img: "/images/products/remeras-4_blanco-1.jpg",
        stock: 15,
        description: "Polo de cuello solapa con cierre frontal de botonadura oculta por solapa. Manga corta acabada con rib. Bajo con aberturas laterales.",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"}
        ]
    },
    {
        id: "5",
        title: "remera love",
        category: "remeras",
        price: 7700,
        img: "/images/products/remeras-5_1.jpg",
        stock: 17,
        description: "Camiseta de cuello redondo y manga corta. Estampado combinado a contraste en delantero.",
        colors: []
    },
    {
        id: "6",
        title: "remera contraste",
        category: "remeras",
        price: 7090,
        img: "/images/products/remeras-6_1.jpg",
        stock: 25,
        description: "Camiseta confeccionada en tejido de algodón con acabado mercerizado. Cuello redondo y manga corta. Estampación en delantero combinada a contraste.",
        colors: []
    },
    {
        id: "7",
        title: "buzo texto combinado",
        category: "buzos",
        price: 11590,
        img: "/images/products/buzos-1_1.jpg",
        stock: 4,
        description: "Sudadera de cuello redondo y manga larga. Estampación combinada a contraste en delantero. Acabados en rib.",
        colors: []
    },
    {
        id: "8",
        title: "buzo color block",
        category: "buzos",
        price: 11590,
        img: "/images/products/buzos-2_1.jpg",
        stock: 1,
        description: "Sudadera de cuello redondo y manga larga. Acabados en rib.",
        colors: []
    },
    {
        id: "9",
        title: "buzo cuello perkins",
        category: "buzos",
        price: 11590,
        img: "/images/products/buzos-3_negro-1.jpg",
        stock: 3,
        description: "Sudadera amplia con cuello perkins y manga larga. Acabados en rib.",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"},
            {color: "gris", code: "#505050"}
        ]
    },
    {
        id: "10",
        title: "buzo parche logo",
        category: "buzos",
        price: 15990,
        img: "/images/products/buzos-4_marino-1.jpg",
        stock: 5,
        description: "Sudadera de cuello redondo y manga larga. Aplicación de parche combinado a contraste en delantero. Acabados en rib.",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"},
            {color: "marino", code: "#0E0F27"}
        ]
    },
    {
        id: "11",
        title: "buzo coordenadas",
        category: "buzos",
        price: 11590,
        img: "/images/products/buzos-5_gris-1.jpg",
        stock: 1,
        description: "Sudadera de cuello redondo y manga larga. Estampado de texto combinado a contraste en delantero y manga. Acabados en rib.",
        colors: [
            {color: "gris antracita", code: "#0d0a02"},
            {color: "khaki", code: "#88876f"}
        ]
    },
    {
        id: "12",
        title: "buzo básico algodón",
        category: "buzos",
        price: 9590,
        img: "/images/products/buzos-6_amarillo-1.jpg",
        stock: 1,
        description: "Sudadera de cuello redondo y manga larga. Acabados en rib.",
        colors: [
            {color: "negro", code: "#000"},
            {color: "amarillo", code: "#F8B020"},
            {color: "azul", code: "#15163C"},
            {color: "verde", code: "#153615"},
            {color: "chocolate", code: "#623C33"}
            
        ]
    },
    {
        id: "13",
        title: "buzo estampado paisaje",
        category: "buzos",
        price: 20990,
        img: "/images/products/buzos-7_1.jpg",
        stock: 1,
        description: "Sudadera de cuello con capucha ajustable y manga larga. Bolsillo frontal tipo canguro. Estampado combinado a contraste en delantero. Acabados en rib.",
        colors: []
    },
    {
        id: "14",
        title: "campera capucha cierre",
        category: "buzos",
        price: 13990,
        img: "/images/products/buzos-8_azul-1.jpg",
        stock: 1,
        description: "Sudadera de cuello con capucha ajustable y manga larga. Bolsillos frontales tipo canguro. Acabados en rib. Cierre frontal con cremallera.",
        colors: [
            {color: "blanco", code: "#FFF"},
            {color: "negro", code: "#000"},
            {color: "azul", code: "#627AA6"},
            {color: "gris", code: "#A6A6A6"},
            {color: "cobre", code: "#92624D"}
        ]
    },
    {
        id: "15",
        title: "buzo básico capucha",
        category: "buzos",
        price: 12590,
        img: "/images/products/buzos-9_verde-1.jpg",
        stock: 1,
        description: "Sudadera amplia de cuello con capucha ajustable y manga larga. Bolsillos frontal tipo canguro. Acabados en rib.",
        colors: [
            {color: "negro", code: "#000"},
            {color: "gris", code: "#CDCDCD"},
            {color: "tostado", code: "#F2E2D9"},
            {color: "verde militar", code: "#212C1C"}
        ]
    },
    {
        id: "16",
        title: "pantalón comfort slim",
        category: "pantalones",
        price: 12990,
        img: "/images/products/pantalones-1_1.jpg",
        stock: 6,
        description: "Pantalón confeccionado en tejido con elasticidad. Cintura elástica ajustable con cordón. Bolsillos laterales y detalle de bolsillos plastrón en espalda.",
        colors: []
    },
    {
        id: "17",
        title: "jean básico slim fit",
        category: "pantalones",
        price: 9990,
        img: "/images/products/pantalones-2_negro-1.jpg",
        stock: 1,
        description: "Jeans slim fit. Cinco bolsillos. Efecto lavado. Cierre frontal con cremallera y botón.",
        colors: [
            {color: "negro", code: "#000"},
            {color: "azul", code: "#171823"},
            {color: "azul medio", code: "#324e69"},
        ]
    },
    {
        id: "18",
        title: "pantalón slim color",
        category: "pantalones",
        price: 11590,
        img: "/images/products/pantalones-3_caqui-1.jpg",
        stock: 1,
        description: "Pantalón slim fit confeccionado en algodón con elasticidad. Cinco bolsillos. Cierre frontal con cremallera y botón.",
        colors: [
            {color: "gris", code: "#2F2F2F"},
            {color: "beige", code: "#C5A069"},
            {color: "caqui", code: "#343222"},
            {color: "marino", code: "#15173D"}
        ]
    },
    {
        id: "19",
        title: "jogger básico",
        category: "pantalones",
        price: 9590,
        img: "/images/products/pantalones-4_gris-1.jpg",
        stock: 1,
        description: "Pantalón de cintura elástica ajustable con cordón. Bolsillos frontales. Bajo acabado en puño elástico.",
        colors: [
            {color: "negro", code: "#000"},
            {color: "gris vigoré", code: "#c3c4c6"},
        ]
    },
    {
        id: "20",
        title: "mochila multifuncional tejido",
        category: "accesorios",
        price: 23990,
        img: "/images/products/accesorios-2_negro-1.jpg",
        stock: 1,
        description: "Bolso tipo mochila. Construcción soft. Color marrón ocre. Cuenta con un bolsillo principal con cierre de doble cremallera. En el interior hay un compartimento para dispositivos electrónicos y portátiles de hasta 13 pulgadas y, además, un bolsillo pequeño de rejilla con cierre de cremallera. En la parte frontal dispone de tres bolsillos medianos, dos con cierre de cremallera y uno con dos botones automáticos. Cuenta con dos asas de hombro ajustables y un asa de mano. La parte trasera y las asas de hombro están acolchadas para favorecer el confort durante su uso. Look sport - urbano.",
        colors: []
    },
    {
        id: "21",
        title: "mini bandolera vertical",
        category: "accesorios",
        price: 10990,
        img: "/images/products/accesorios-5_marron-1.jpg",
        stock: 1,
        description: "Mini bandolera monocolor. Formato vertical. Corte con acabado granulado. Compartimento principal con cierre de cremallera tipo termosellado. Cuenta con un bolsillo en su interior. Frontal con bolsillo con solapa con cierre magnético. Dispone de un asa de hombro ajustable y extraíble.",
        colors: []
    },
    {
        id: "22",
        title: "gorro punto canalé",
        category: "accesorios",
        price: 4990,
        img: "/images/products/accesorios-1_negro-1.jpg",
        stock: 1,
        description: "Gorro punto suave.",
        colors: [
            {color: "negro", code: "#000"},
            {color: "marino", code: "#242334"},
            {color: "tostado", code: "#b07954"},
            {color: "gris antracita", code: "#4e4b47"}
        ]
    },
    {
        id: "23",
        title: "bufanda básica",
        category: "accesorios",
        price: 7990,
        img: "/images/products/accesorios-3_gris-1.jpg",
        stock: 1,
        description: "Bufanda acabado irregular.",
        colors: [
            {color: "negro", code: "#000"},
            {color: "marino", code: "#242334"},
            {color: "tostado", code: "#b07954"},
            {color: "gris antracita", code: "#4e4b47"}
        ]
    },
    {
        id: "24",
        title: "for him 100ml",
        category: "perfumes",
        price: 7990,
        img: "/images/products/perfumes-1_1.jpg",
        stock: 1,
        description: "Eau de toilette oriental. La pirámide olfativa incluye notas de bergamota, cardamomo y sándalo. Es una fragancia cálida, moderna e intensa.",
        colors: []
    },
    {
        id: "25",
        title: "for him metal 100ml",
        category: "perfumes",
        price: 7990,
        img: "/images/products/perfumes-2_1.jpg",
        stock: 1,
        description: "Eau de toilette amaderada. La pirámide olfativa incluye notas de pomelo, jengibre y sándalo. Es una fragancia sport, fresca y masculina.",
        colors: []
    },
    {
        id: "26",
        title: "for him black edition 100ml",
        category: "perfumes",
        price: 7990,
        img: "/images/products/perfumes-3_1.jpg",
        stock: 1,
        description: "Eau de toilette oriental. La pirámide olfativa incluye notas de nuez moscada, flor de naranja y cedro. Es una fragancia cálida, duradera y confortable.",
        colors: []
    },
    {
        id: "27",
        title: "for him black + red edition 100ml",
        category: "perfumes",
        price: 7990,
        img: "/images/products/perfumes-4_1.jpg",
        stock: 1,
        description: "Eau de Toilette / Eau de Parfum duo set oriental. La pirámide olfativa incluye notas de nuez moscada, flor de naranja y cedro (I) + notas de naranja, ámbar y evernyl (II).",
        colors: []
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 200)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 200)
    })
}