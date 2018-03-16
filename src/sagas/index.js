import {call, put, takeLatest} from 'redux-saga/effects';
import{
    FETCH_NEWS
} from '../actions/news';

import {getArticles} from '../services/news';

const apiconfig={
    type: FETCH_NEWS,
    apiFn: getArticles,
};

function *middlewareSaga(config,params){
    try{
        console.log('calling function', config.apiFn);
        const response=yield call(config.apiFn, params);
        console.log(response);
        if(response)
            {   
                console.log('dispatching action to reducers');
                console.log(`${config.type}_SUCCESS`);
                yield put({type: `${config.type}_SUCCESS`, data: response});
                
            }

        }
    catch(ex) {
        yield put({type:`${config.type}_FAILED`, message: ex.message});
    }

}


function *sagas(){
    console.log("inside saga function");
    yield takeLatest(FETCH_NEWS, middlewareSaga,apiconfig)
}

export default sagas;