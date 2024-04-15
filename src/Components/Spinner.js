import loading_spinner from '../loading_spinner.gif'
import React from 'react'

const Spinner = () => {
    return (
        <div>
            <img src={loading_spinner} alt='loading...' />
        </div>
    )
}

export default Spinner