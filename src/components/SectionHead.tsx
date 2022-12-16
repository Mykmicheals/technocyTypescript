import React from 'react'

function SectionHead({ Heading }) {
    return (
        <div className='flex mx-24 mt-20 mb-8'>
            <h3 className='text-2xl font-bold uppercase'>{Heading}</h3>
            <p className='absolute right-20 font-bold hover:text-red-600 cursor-pointer'>View all {'>'}  </p>
        </div>
    )
}

export default SectionHead