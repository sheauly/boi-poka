import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({singleBook}) => {
    const { bookName, image, rating,category, tags, 
yearOfPublishing, publisher, bookId } = singleBook;


    // console.log(singleBook)
    return (
        <Link to={`/BookDetails/${bookId}`}>
               <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
   <img className="h-[166px]" src={image} alt="" />
  </figure>
            <div className="card-body">
                <div className=" flex justify-center gap-10">
                    {
                        tags.map(tag => <button className="">{tag}</button>) 
                    }
                </div>
    <h2 className="card-title">
     {bookName}
    <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
                <p>Book By: {publisher}</p>
                <div className="border-dashed border-1 "></div>
    <div className="card-actions justify-between">
      <div className="badge">{category}</div>
                    <div className="badge">{rating
                    }<FaRegStarHalfStroke /></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;