const URL = "https://hawana.onrender.com/picture/getPicture";
const getImages = (setAllImages) => {
    fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllImages(responseJson.allPictures)
            } else {
                console.log(responseJson.message);
            }
        }).catch(error => {
            console.log('Error:', error.message);
        })
}
export default getImages;