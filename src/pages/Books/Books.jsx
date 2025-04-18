import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allbooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            } )
    },[])

    return (
        <div>
            <h3>My Books</h3>
        </div>
    );
};

export default Books;