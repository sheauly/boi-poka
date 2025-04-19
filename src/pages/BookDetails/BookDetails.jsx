import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utility/addToDb';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image } = singleBook;

    const handleMarkRead = id => {
       addToStoreDB (id)
    }
   
    return (
        <div className='w-2/3 border mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h4>{bookName}</h4>
            <button onClick={() => handleMarkRead(id)} type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Mar as Read</button>
            <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Add to wistList</button>
        </div>
    );
};

export default BookDetails;