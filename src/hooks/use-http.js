import { useCallback, useReducer } from "react";

const initialState = {
    loading: false,
    error: null,
    data: []
}

const ACTIONS = {
    API_REQUEST: 'api-request',
    FETCH_DATA: 'fetch-data',
    ERROR: 'error'
}

const httpreducer = (state, { type, payload }) => {
    console.log(type);
   
    switch (type) {
        case ACTIONS.API_REQUEST:
            return { ...state, loading: true, data: [], error: null }
        case ACTIONS.FETCH_DATA:
            console.log("payload : ",payload);
            return { ...state, loading: false, data: [...payload], error: null }
        case ACTIONS.ERROR:
            console.log("payload : ",payload);
            return { ...state, loading: false, data: [], error: payload }
        default:
            return state
    }
}

const useHttp = () => {
    const [state, dispatch] = useReducer(httpreducer, initialState);
    const sendRequest = useCallback(async (requestConfig) => {
        dispatch({type: ACTIONS.API_REQUEST});
        try{
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                }
            );
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            dispatch({ type: ACTIONS.FETCH_DATA, payload: data });
        }catch(err){
            dispatch({type: ACTIONS.ERROR, payload: err.message});
        }
    },[]);

    return {
        state,
        sendRequest
    }
}
export default useHttp;