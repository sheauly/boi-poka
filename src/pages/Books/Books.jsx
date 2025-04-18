import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allbooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         } )
    // },[])
    // const bookPromise = fetch('./booksData.json')
    //     .then(res => res.json())
    
    return (
        <div>
            <h3 className='text-2xl text-center p-6'>Books</h3>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                     {
                    data.map((singleBook) =><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;