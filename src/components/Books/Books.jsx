// import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {

    const {books}=useLoaderData()
    
   




    // const [books,setBooks]=useState([])


// useEffect(()=>{

// // fetch('https://api.itbook.store/1.0/new')
// // .then (res=>res.json())
// // .then(data=>console.log(data))




// },[])

    return (
      <div>
         <div className='my-container'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
           {
            books.map(book=><Book key={book.isbn13} book={book}></Book>)
           }

            </div>
            
        </div>
       </div>
    );
};

export default Books;