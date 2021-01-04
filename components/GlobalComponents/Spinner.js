import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
    console.log("ad")
    return (
        <div className="spinner">
            <CircularProgress size={100} />
        </div>
    )
}

export default Spinner