import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import {  saveListedReadBooks, saveListedWishlistBooks } from "../../utilities/localStorage";



const BookDetails = () => {
    const [readBtn,setReadBtn]=useState(true);
    const [wishListBtn,setWishListBtn]=useState(true);

    const books=useLoaderData();
    const {bookId}=useParams();
    const idInt=parseInt(bookId);
    const book=books.find(book=>book.bookId===idInt);
    
    const handleReadButton=()=>{
      if(readBtn){
        
        saveListedReadBooks(idInt);
        
        setWishListBtn(false);
        toast('Added to the read list')
        
      }
      else{
        toast('Already Added to the read list. Double click is not allowed');
      }
      setReadBtn(false);
      
      
        
     
      
    }
    const handleWishListButton=()=>{
      if(wishListBtn){
        saveListedWishlistBooks(idInt);
        
        
        setReadBtn(true);
        toast('Added to the wishlist');
        
        
      }
      else if(readBtn){
        if(wishListBtn){
          toast('Already Added to the readlist so you can not add wishlist')

        }
        
      }
      
      
      else{
        toast('Already Added to the wishlist. Double click is not allowed');
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