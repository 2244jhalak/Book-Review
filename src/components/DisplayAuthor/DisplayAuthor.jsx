import PropTypes from 'prop-types';

const DisplayAuthor = ({individual}) => {
    const {image,name,nationality,genre,notableWorks,website} =individual;
    return (
        <div>
            <div className="card lg:w-96 mx-5 lg:mx-0 bg-base-100 shadow-xl">
            <figure><img className='w-full h-[350px]' src={image} alt="Author"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{name}</h2>
    <h4 className='font-semibold'>{nationality}</h4>
    <h5>Genre : {genre}</h5>
    <p>Notable works : {notableWorks[0]}, {notableWorks[1]}</p>
    <div className="card-actions">
      <button className="btn bg-green-500 font-bold text-white px-8"><a href={website}>Visit</a></button>
    </div>
  </div>
</div>
            
        </div>
    );
};
DisplayAuthor.propTypes = {
    
    individual: PropTypes.object,
  
}

export default DisplayAuthor;