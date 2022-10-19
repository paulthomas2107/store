
// Coffee: price_1LufAcDAv1ILAQyV9f0B3xy3
// Sunglassses: price_1LufCYDAv1ILAQyVFMoUHKKi
// Camera: price_1LufDcDAv1ILAQyVi9LbegO3

const productsArray = [
    {
        id: "price_1LufAcDAv1ILAQyV9f0B3xy3",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1LufCYDAv1ILAQyVFMoUHKKi",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1LufDcDAv1ILAQyVi9LbegO3",
        title: "Camera",
        price: 39.99
    }
]

function getProductData(id) {

    let productData = productsArray.find(product => product.id === id)

    if (productData === undefined) {
        console.log('Product data does not exist for ID: '+id)
        return undefined;
    }

    return productData;

}

export {productsArray, getProductData};