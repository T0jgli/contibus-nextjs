import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
    return (
        <div className="spinner">
            <CircularProgress style={{ color: "grey" }} size={100} />
        </div>
    )
}

export default Spinner