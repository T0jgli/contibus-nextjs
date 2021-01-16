import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    busesData: [],
    muzeumData: [],
    snackbar: {},
}

export const setbusesData = (payload) => ({
    type: "INITBUSESDATA",
    busesData: payload
})

export const setmuzeumData = (payload) => ({
    type: "INITMUZEUMDATA",
    muzeumData: payload
})

export const setsnackbar = (payload) => ({
    type: "SETSNACKBAR",
    payload
})

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case 'INITBUSESDATA':
            return { ...state, busesData: action.busesData };
        case 'INITMUZEUMDATA':
            return { ...state, muzeumData: action.muzeumData };
        case 'SETSNACKBAR':
            return { ...state, snackbar: action.payload.snackbar };

        default:
            return state;
    }
};
