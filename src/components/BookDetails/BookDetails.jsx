import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";



const BookDetails = () => {
    const [readBtn,setReadBtn]=useState(true);
    const [wishListBtn,setWishListBtn]=useState(true);
    const [countR,setCountR]=useState(0);
    const [countW,setCountW]=useState(0);
    const books=useLoaderData();
    const {bookId}=useParams();
    const idInt=parseInt(bookId);
    const book=books.find(book=>book.bookId===idInt);
    
    const handleReadButton=()=>{
      if(readBtn){
        const newCount=countR +1;
        console.log(newCount);
        setCountR(newCount);
        setWishListBtn(false);
        
      }
      else{
        toast('Already Added to read list');
      }
      setReadBtn(false);
      
      
        
     
      
    }
    const handleWishListButton=()=>{
      if(wishListBtn){
        const newCount=countW +1;
        console.log(newCount);
        setCountW(newCount);
        setReadBtn(true);
        
      }
      else{
        toast('You already read this so you can not wish this');
      }
      setWishListBtn(false);
      
    }
    
    return (
        <div className="flex p-20">
            <div className="flex-1 bg-gray-100 p-20 rounded-xl">
                <img className="h-[500px] w-full rounded-xl" src={book.image} alt="" />

            </div>
            <div className="flex-1 px-12 space-y-5">
                <h3 className="text-4xl font-bold">{book.bookName}</h3>
                <p className="font-semibold">By : {book.author}</p>
                <hr></hr>
                <p className="font-semibold">{book.category}</p>
                <hr></hr>
                <p><span className="font-bold">Review : </span>{book.review}</p>
                <div className="flex items-center">
                    <p className="mr-3 font-bold">Tag</p>
                    <button  className="rounded-xl mr-3 px-2 py-1 text-center bg-gray-200 text-green-500 font-semibold">#{book.tags[0]}</button>
                    <button  className="rounded-xl px-2 py-1 text-center bg-gray-200 text-green-500 font-semibold">#{book.tags[1]}</button>
        
        
               </div>
               <hr></hr>
               <div className="flex">
                   <div className="mr-20">
                      <p>Number of Pages:</p>
                      <p>Publisher:</p>
                      <p>Year of Publishing:</p>
                      <p>Rating</p>

                   </div>
                   <div>
                    <p>{book.totalPages}</p>
                    <p>{book.publisher}</p>
                    <p>{book.yearOfPublishing}</p>
                    <p>{book.rating}</p>

                   </div>

               </div>
               <div>
                  <button onClick={handleReadButton} className="btn mr-3 border-2 font-bold border-gray-300 px-8">Read</button>
                  <button onClick={handleWishListButton} className="btn text-white bg-blue-400 px-8 font-bold">Wishlist</button>
                  <ToastContainer></ToastContainer>
                

               </div>
            </div>
            
        </div>
    );
};

export default BookDetails;