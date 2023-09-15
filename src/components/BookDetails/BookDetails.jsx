import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails=useLoaderData()
   
    return (
        <div>
      <h2>this is Details page</h2>
        </div>
    );
};

export default BookDetails;