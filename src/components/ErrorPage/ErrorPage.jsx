import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div className="text-center my-20 font-semibold space-y-3">
            <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h3>{error.status===404 && <h3>You are in wrong way bro!!!!</h3>}</h3>
      <button className="text-white bg-green-500 btn"><Link to={'/'}>Go Back</Link></button>
            
        </div>
    );
};

export default ErrorPage;