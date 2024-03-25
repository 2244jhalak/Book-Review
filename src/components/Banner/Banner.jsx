import { Link } from 'react-router-dom';
import Cover from '../../assets/images/The_Great_Gatsby_Cover_1925_Retouched.jpg'

const Banner = () => {
    return (
        <div className="flex justify-between items-center px-36 py-16 bg-base-200 h-fit rounded-xl my-5">
            <div className='space-y-8'>
                <h3 className='text-5xl font-semibold'>Books to freshen up <br></br>
                 your bookshelf</h3>
                 <button className='btn bg-green-500 rounded-lg text-white'>
                    <Link to='/listed'>View The List</Link></button>

            </div>
            <div>
                <img className='w-48' src={Cover} alt="" />

            </div>
            
        </div>
    );
};

export default Banner;