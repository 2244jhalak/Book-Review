import PropTypes from 'prop-types';
import { FaMapMarkerAlt,FaUser,FaFileAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayList = ({book}) => {
    const {image,bookName,author,rating,bookId,totalPages,category,tags,yearOfPublishing,publisher} =book;
    return (
        <div className='border-gray-100 border-2 flex rounded-xl mb-5 p-5 space-y-3'>
            <div>
                <img className='h-72' src={image} alt="" />

            </div>
            <div className='ml-10 space-y-5'>
                <h2 className='text-3xl font-semibold'>
                    {bookName}
                </h2>
                <p>By : {author}</p>
                <div className="flex items-center">
                    <p className="mr-3 font-bold">Tag</p>
                    <button  className="rounded-xl mr-3 px-2 py-1 text-center bg-gray-200 text-green-500 font-semibold">#{tags[0]}</button>
                    <button  className="rounded-xl mr-3 px-2 py-1 text-center bg-gray-200 text-green-500 font-semibold">#{tags[1]}</button>
                    <FaMapMarkerAlt className='mr-2'></FaMapMarkerAlt>
                    <p>Year of Publishing : {yearOfPublishing}</p>
        
        
               </div>
               <div className='flex items-center'>
                <FaUser className='mr-2'></FaUser>
                <p className='mr-3'>Publisher : {publisher}</p>
                <FaFileAlt className='mr-2'></FaFileAlt>
                <p>Page {totalPages}</p>
                    

               </div>
               <hr></hr>
               <div>
               <button  className="rounded-xl mr-3 px-3 py-2 text-center bg-blue-200 text-blue-500 font-semibold">Category : {category}</button>
                    <button  className="rounded-xl mr-3 px-3 py-2 text-center bg-orange-200 text-orange-500 font-semibold">Rating : {rating}</button>
                    <button className='bg-green-500 rounded-xl text-white px-3 py-2'>
                    <Link to={`/details/${bookId}`}>
                    View Details</Link></button>

               </div>

            </div>
            
            
        </div>
    );
};
DisplayList.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    book: PropTypes.object,
    
}

export default DisplayList;