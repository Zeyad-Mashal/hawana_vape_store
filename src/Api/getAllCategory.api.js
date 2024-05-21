const URL = "https://hawana.onrender.com/category/getcategory";
const getAllCategory = (setAllCategory, setProductsLoading) => {
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
                setAllCategory(responseJson.allCategory)
                setProductsLoading(false);
            } else {
                console.log(responseJson.message);
                setProductsLoading(false);
            }
        }).catch(error => {
            console.log('Error:', error.message)
            setProductsLoading(false);
        })
}
export default getAllCategory;