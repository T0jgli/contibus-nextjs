import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { selectsnackbar, setsnackbar } from "../../lib/AppSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';

const Snackbars = () => {
    const dispatch = useDispatch()

    const { locale } = useRouter()
    const snackbaropen = useSelector(selectsnackbar)
    return (
        <Snackbar open={snackbaropen?.open} anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={3500} onClose={(event, reason) => {
                if (reason === "clickaway") { return; };
                dispatch(setsnackbar({ snackbar: { ...snackbaropen, open: false } }))
            }}>
            <MuiAlert elevation={5} variant="filled"
                onClose={(event, reason) => { if (reason === "clickaway") { return; }; dispatch(setsnackbar({ snackbar: { ...snackbaropen, open: false } })) }}
                severity={snackbaropen?.type}
                className="rounded"
            >
                {locale === "en" ? (snackbaropen?.en) : (snackbaropen?.hu)}
            </MuiAlert>
        </Snackbar>
    )
}

export default Snackbars
