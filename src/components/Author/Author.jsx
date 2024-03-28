import { useEffect } from "react";
import { useState } from "react";
import DisplayAuthor from "../DisplayAuthor/DisplayAuthor";


const Author = () => {
    const [author,setAuthor]=useState([]);
    useEffect(()=>{
        fetch('author.json')
        .then(res=>res.json())
        .then(data=>setAuthor(data))

    },[])
    return (
        <div className="space-y-8 mt-16">
            <h3 className="text-center text-4xl font-semibold">Our Honourable Authors</h3>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-8">
            {
                author.map(individual=><DisplayAuthor key={individual.id} individual={individual}></DisplayAuthor>)
            }
            </div>
            
            
            
        </div>
    );
};

export default Author;