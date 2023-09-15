import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    return (
     <Link to={`../bookdetails/${book.isbn13}`}>
           <div>
               <div className='overflow-hidden relative transition duration-200 transform  hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img src={book.image} className='object-cover w-full h-56  md:h-64 xl:h-80'></img>
                    <div className='bg-black opacity-0 hover:opacity-100 text-red-300 bg-opacity-70 absolute inset-0 transition-opacity duration-200 px-6 py-4 flex  flex-col '>
                        <p>{book.title}</p>
                        <br></br>
                        
                        <p>{book.subtitle.substring(0.45)}  ...see more...</p>
                        <br></br>
                        <p className='mt-auto'>{Book.price}</p>
                        <br></br>
                    </div>


              </div> 
        </div>
     </Link>
    );
};

export default Book;