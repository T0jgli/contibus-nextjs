import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
    return (
        <div className="spinner m-5 pt-5">
            <CircularProgress style={{ color: "grey" }} size={75} />
        </div>
    )
}

export default Spinner