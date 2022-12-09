const productsArray = [
    {
        id: '1',
        title: 'Segway S Plus',
        image: require('./images/s-plus.png'),
        price: 999.99,
        cart: false
    },
    {
        id: '2',
        title: 'Ninebot S',
        image: require('./images/ninebot-s.png'),
        price: 750.99,
        cart: false
    },
    {
        id: '3',
        title: 'Ninebot S Kids',
        image: require('./images/ninebot-kids.png'),
        price: 650.99,
        cart: false
    },
    {
        id: '4',
        title: 'Ninebot One S',
        image: require('./images/ninebot-one-s1.jpeg'),
        price: 550.99,
        cart: false
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Couldn't find it");
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };