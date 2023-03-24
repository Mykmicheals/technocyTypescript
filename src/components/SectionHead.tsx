import Link from 'next/link'
import React from 'react'

function SectionHead({ id }) {
    return (
        <div className='flex mx-8 md:mx-24 mt-20 mb-8'>
            <h3 className='text-2xl font-bold uppercase'>{id}</h3>
            <Link href={{
                pathname: `/category`,
                query: {id}
            }}>
             <p className='absolute right-20 font-bold hover:text-red-600 cursor-pointer'>View all {'>'}  </p>
            </Link>
           
        </div>
    )
}

export default SectionHead