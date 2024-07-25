import React from 'react'

const blink = () => {
    return (
        <>
            <h3 className='mb-0'>
                Initializing Project
                <span className="loader__dot">.</span>
                <span className="loader__dot">.</span>
                <span className="loader__dot">.</span>
            </h3>
        </ >
    )
}

export default blink