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
    
    const handleReadBooks=(filter)=>{
        
      
            if(filter==='rating'){
                const rating=listedReadBooks.map(book=>book);
            const newRating= rating.sort((a, b) => b.rating - a.rating);

            setDisplayReadBooks(newRating);

            }
            else if(filter==='number'){
            const pages=listedReadBooks.map(book=>book);
            const newPages= pages.sort((a, b) => b.totalPages - a.totalPages);

            setDisplayReadBooks(newPages);

        }
        else if(filter==='year'){
            const year=listedReadBooks.map(book=>book);
            const newYear= year.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

            setDisplayReadBooks(newYear);

        }
    }
    
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
    useEffect(()=>{
        const storedReadBookIds=getStoredListedWishlistBooks();
        if(books.length>0){
            const listedBooks=[];
            for(const id of storedReadBookIds){
                const book=books.find(book=>book.bookId===id);
                if(book){
                    listedBooks.push(book);
                }
            }
            setListedWishListBooks(listedBooks);
            setDisplayWishListBooks(listedBooks);
           
              
           
           
        }
    },[books])
    

    return (
        <div className="lg:mx-60 mx-6 my-20">
            <div className="text-right">
            <details className="dropdown mb-10">
  <summary className="m-1 btn text-white bg-green-500">Sort By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleReadBooks('rating')}><a>Rating</a></li>
    <li onClick={()=>handleReadBooks('number')}><a>Number of pages</a></li>
    <li onClick={()=>handleReadBooks('year')}><a>Publisher year</a></li>
    
  </ul>
</details>

</div>

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