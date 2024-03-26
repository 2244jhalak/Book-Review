// Read books
const getStoredListedReadBooks=()=>{
    const storedListedBooks = localStorage.getItem('listed-read-books');
    if(storedListedBooks){
        return JSON.parse(storedListedBooks);
    }
    return [];
}

const saveListedReadBooks =bookId=>{
    const storedListedBooks=getStoredListedReadBooks();
    const exist=storedListedBooks.find(booksId=>booksId===bookId);
    if(!exist){
       storedListedBooks.push(bookId);
       localStorage.setItem('listed-read-books',JSON.stringify(storedListedBooks));

    }

}
// Wishlist books
const getStoredListedWishlistBooks=()=>{
    const storedListedBooks = localStorage.getItem('listed-wishlist-books');
    if(storedListedBooks){
        return JSON.parse(storedListedBooks);
    }
    return [];
}

const saveListedWishlistBooks =bookId=>{
    const storedListedBooks=getStoredListedWishlistBooks();
    const exist=storedListedBooks.find(booksId=>booksId===bookId);
    if(!exist){
       storedListedBooks.push(bookId);
       localStorage.setItem('listed-wishlist-books',JSON.stringify(storedListedBooks));

    }

}
export {getStoredListedReadBooks,saveListedReadBooks,getStoredListedWishlistBooks,saveListedWishlistBooks}