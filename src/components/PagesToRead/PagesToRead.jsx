import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredListedReadBooks } from "../../utilities/localStorage";

import { Bar, BarChart, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from "recharts";



const PagesToRead = () => {
    const books=useLoaderData();
    const [listedReadBooks,setListedReadBooks]=useState([]);
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
            
           
              
           
           
        }
    },[books])
   
    return (
        <div className="mt-10">
            <BarChart barCategoryGap={40} width={1200} height={600} data={listedReadBooks} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="bookName" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="totalPages" fill="#8884d8" label={{ position: 'top', fontSize: 12 }}>
    {listedReadBooks.map((index) => (
      <Cell key={`cell-${index}`} />
    ))}
  </Bar>
</BarChart>

            
            
        </div>
    );
};

export default PagesToRead;