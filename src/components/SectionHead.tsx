import React from 'react'

function SectionHead({ Heading }) {
    return (
        <div className='mx-24 mt-20 mb-8'>
            <h3 className='text-2xl font-bold uppercase'>{Heading}</h3>
        </div>
    )
}

export default SectionHead