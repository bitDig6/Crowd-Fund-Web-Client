import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center gap-10 min-h-dvh'>
            <span className="loading loading-spinner text-secondary loading-xl"></span>
        </div>
    );
};

export default LoadingSpinner;