const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return (storedBookData)
    }
    else {
        return [];
    }
}
const addToStoreDB = (id) => {

    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        console.log('hello')
        alert("vai ay id alreday exist")
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
        console.log(storedBookData)
    }

}
export{addToStoreDB, getStoredBook}