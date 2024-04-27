const URL = "https://hawana.onrender.com/product/getByRandom";
const getAllProducts = (setAllProducts, setProductsLoading) => {
    setProductsLoading(true)
    fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllProducts(responseJson.products)
                setProductsLoading(false)
            } else {
                console.log(responseJson.message);
                setProductsLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setProductsLoading(false)
        })
}
export default getAllProducts;