import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Lottie from 'lottie-react';
import  reader  from '../../../src/assets/reader.json'

import { Link } from 'react-router-dom';





const Home = () => {
    return (
        <div className='  flex justify-between items-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8r'>
            <div className=' flex mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <div>
            <p className='badge'>On Sale!</p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            A reader lives a <br className='hidden md:block' /> thousand lives{' '}
            <span className='inline-block text-blue-400'>before he dies</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <div className='flex flex-col items-center md:flex-row pt-5'>
          <Link to='/books' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Visit Store</p>
              <ShoppingCartIcon className='w-5 text-gray-100' />
            </div>
          </Link>
          <Link to='/about'className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
          >
            Learn More
          </Link>
        </div>
        </div>
      
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={reader} loop={true} />
          
        </div>
      </div>
        </div>
        
    );
};

export default Home;