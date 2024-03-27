
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-10">Books</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;