import { takeEvery ,put} from "@redux-saga/core/effects";
import * as action_types from '../constant/actionTypes';
import fetchStart from '../service';
import {FETCH_PRODUCT_URL} from '../constant';
import {utillSuccess} from '../action'
function * handleUtillOperation(action){
    let type=action.type;
switch(type){
    case action_types.FETCH_PRODUCT_DATA:
       const response=yield fetchStart(FETCH_PRODUCT_URL);
       yield put(utillSuccess(response.data.data,action_types.SET_PRODUCT_DATA));
       break;
    case  action_types.HANDLE_FILTER_BUTTON_CLICK:
    case action_types.CLOSE_MODAL_POPUP:
    case action_types.CLOSE_SORT_POPUP:
    case  action_types.HANDLE_SORT_BUTTON_CLICK:
    case action_types.SET_PARENT_FILTER_INDEX:
    case action_types.SET_CHILD_AGGREGATION_INDEX:
    case action_types.APPLY_FILTER:
    case  action_types.RESET_FILTER:
    case  action_types.SET_SORTING_STATUS:
        yield put(utillSuccess(action.payload,type));
        break;
}    

    
}
function * utillSaga(){
yield takeEvery([action_types.FETCH_PRODUCT_DATA,
                    action_types.UTILL_SUCCESS,
                    action_types.HANDLE_FILTER_BUTTON_CLICK,
                    action_types.CLOSE_MODAL_POPUP,
                    action_types.CLOSE_SORT_POPUP,
                    action_types.SET_PARENT_FILTER_INDEX,
                    action_types.HANDLE_SORT_BUTTON_CLICK,
                    action_types.SET_CHILD_AGGREGATION_INDEX,
                    action_types.APPLY_FILTER,
                    action_types.RESET_FILTER,
                    action_types.SET_SORTING_STATUS
                ],
    handleUtillOperation);
}
export default utillSaga;