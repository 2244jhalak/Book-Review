import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredListedReadBooks, getStoredListedWishlistBooks } from "../../utilities/localStorage";
import DisplayList from "../DisplayList/DisplayList";
import PagesToRead from "../PagesToRead/PagesToRead";



const ListedBooks = () => {
    const books=useLoaderData();
    const [listedReadBooks,setListedReadBooks]=useState([]);
    const [displayReadBooks,setDisplayReadBooks]=useState([]);
    const [listedWishListBooks,setListedWishListBooks]=useState([]);
    const [displayWishListBooks,setDisplayWishListBooks]=useState([]);
    // const handleJobs=filter=>{
    //     if(filter==='rating'){
    //         const rating=listedReadBooks.filter(book=>book.rating)
    //         setDisplayReadBooks(rating);  
    //     }
    //     else if(filter==='total'){
    //         const remote=jobApplied.filter(job=>job.remote_or_onsite==='Remote');
    //         setDisplayJobs(remote);
    //     }
    //     else if(filter==='year'){
    //         const onsite=jobApplied.filter(job=>job.remote_or_onsite==='Onsite');
    //         setDisplayJobs(onsite);
    //     }
    // }

    useEffect(()=>{
        const storedWishListBookIds=getStoredListedWishlistBooks();
        if(books.length>0){
            const listedBooks=[];
            for(const id of storedWishListBookIds){
                const book=books.find(book=>book.bookId===id);
                if(book){
                    listedBooks.push(book);
                }
            }
            setListedWishListBooks(listedBooks);
            setDisplayWishListBooks(listedBooks);
           
              
           
           
        }
    },[books])
    useEffect(()=>{
        const storedReadBookIds=getStoredListedReadBooks();
        if(books.length>0){
            const listedBooks=[];
            for(const id of storedReadBookIds){
                const book=books.find(book=>book.bookId===id);
                if(book){
                    listedBooks.push(book);
                }
            }
            setListedReadBooks(listedBooks);
            setDisplayReadBooks(listedBooks);
           
              
           
           
        }
    },[books])
    return (
        <div className="lg:mx-60 mx-6 my-20">
            <div role="tablist" className="tabs tabs-lifted">
  
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  {
                displayReadBooks.map(book=><DisplayList key={book.bookId} book={book}></DisplayList>)
  }

  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  {
                displayWishListBooks.map(book=><DisplayList key={book.bookId} book={book}></DisplayList>)
  }
  </div>
</div>
            
            {/* {
                displayReadBooks.map(book=><DisplayList key={book.bookId} book={book}></DisplayList>)
            } */}
            <div className="hidden">
                {
                    displayReadBooks.map(book=><PagesToRead key={book.bookId} book={book}></PagesToRead>)
                }
            </div>
            
</div>
    );
    
};

export default ListedBooks;