const URL = "https://hwnofficial.host/contact/addContact";
const ContactUs = (data, setCLoading, setCError, setCName, setCNumber, setCEmail, setCMessage) => {
    setCLoading(true)
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setCLoading(false)
                document.querySelector(".contact_popup").classList.replace("d-none", "d-block")
                setCName("")
                setCNumber("")
                setCEmail("")
                setCMessage("")
            } else {
                setCError(responseJson.message)
                setCLoading(false)
            }
        }).catch(error => {
            setCError(error.message)
            setCLoading(false)
        })
}
export default ContactUs;