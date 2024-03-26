import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredListedReadBooks } from "../../utilities/localStorage";
import DisplayList from "../DisplayList/DisplayList";



const ListedBooks = () => {
    const books=useLoaderData();
    const [listedReadBooks,setListedReadBooks]=useState([]);
    const [displayReadBooks,setDisplayReadBooks]=useState([]);
    const handleJobs=filter=>{
        if(filter==='rating'){
            const rating=listedReadBooks.filter(book=>book.rating)
            setDisplayReadBooks(rating);  
        }
        // else if(filter==='total'){
        //     const remote=jobApplied.filter(job=>job.remote_or_onsite==='Remote');
        //     setDisplayJobs(remote);
        // }
        // else if(filter==='year'){
        //     const onsite=jobApplied.filter(job=>job.remote_or_onsite==='Onsite');
        //     setDisplayJobs(onsite);
        // }
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
    return (
        <div className="mx-60 my-20">
            <h2>Applied : {listedReadBooks.length}</h2>
            <div className="text-right mb-16">
            <details className="dropdown mb-10">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleJobs('rating')}><a>Rating</a></li>
    <li onClick={()=>handleJobs('total')}><a>Number of Pages</a></li>
    <li onClick={()=>handleJobs('year')}><a>Publisher Year</a></li>
    
  </ul>
</details>
            </div>
            {
                displayReadBooks.map(book=><DisplayList key={book.bookId} book={book}></DisplayList>)
            }
            
        </div>
    );
    
};

export default ListedBooks;