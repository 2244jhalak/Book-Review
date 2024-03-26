import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image,tags,bookName,author,category,rating,bookId} = book;
    return (
        <Link to={`/details/${bookId}`}>
        <div className="card w-96 bg-base-100 shadow-xl border-2">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-80" />
  </figure>
  <div className="card-body space-y-3">
    <div className="flex">
        <button className="rounded-xl mr-5 px-2 py-1 text-center bg-gray-200 text-green-500">{tags[0]}</button>
        <button className="rounded-xl px-2 py-1 text-center bg-gray-200 text-green-500">{tags[1]}</button>
        
    </div>
    <h2 className="card-title font-bold">{bookName}</h2>
    <p>By : {author}</p>
    <hr className='border-dashed'></hr>
    <div className="flex justify-between items-center">
        <div>
            <p>{category}</p>

        </div>
        <div className='flex items-center'>
            <p className='mr-3'>{rating}</p>
            <FaStar></FaStar>

        </div>
      
    </div>
  </div>
</div>
        </Link>
    );
};
Book.propTypes = {
    
    book: PropTypes.object,
}

export default Book;