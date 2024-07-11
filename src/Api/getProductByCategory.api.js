const URL = "https://hwnofficial.host/product/getByCategory";
const getProductByCategory = (setAllProducts, setAllProductLoading, setAllProductError, categoryID) => {
    setAllProductLoading(true)
    fetch(`${URL}/${categoryID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllProducts(responseJson.allProduct)
                setAllProductLoading(false)
            } else {
                setAllProductLoading(false)
                setAllProductError(responseJson.message)
            }
        }).catch(error => {
            setAllProductError(error.message)
            setAllProductLoading(false)
        })
}
export default getProductByCategory;