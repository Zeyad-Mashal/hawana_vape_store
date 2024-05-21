const URL = "https://hawana.onrender.com/product/productDetails";
const productDetails = (setProduct, setAllProductLoading, setAllProductError, productID) => {
    setAllProductLoading(true)
    fetch(`${URL}/${productID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setProduct(responseJson.product)
                setAllProductLoading(false)
                console.log(responseJson.product);
            } else {
                setAllProductLoading(false)
                setAllProductError(responseJson.message)
            }
        }).catch(error => {
            setAllProductError(error.message)
            setAllProductLoading(false)
        })
}
export default productDetails;