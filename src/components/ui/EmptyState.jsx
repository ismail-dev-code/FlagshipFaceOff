import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

const EmptyState = () => {
    return (
        <div className='py-24 text-center'>
            <h1 className='mb-3 md:text-7xl text-4xl font-thin text-gray-900'>No Data Found</h1>
            <p className='mb-8 text-base text-gray-900 md:text-2xl'>Browse, Search Phones. Add to Cart, Favorites.</p>
            <Link to='/'>
            <Button label='Browse Phone' />
            </Link>
        </div>
    );
};

export default EmptyState;