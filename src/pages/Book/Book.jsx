

const Book = ({singleBook}) => {
    const { bookName, author, image } = singleBook;


    console.log(singleBook)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="p-3">
   <img src={image} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
                <p>{author}</p>
    <div className="card-actions justify-end">
      <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Dark</button>
      <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Green</button>
    </div>
  </div>
</div>
    );
};

export default Book;