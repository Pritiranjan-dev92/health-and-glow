import * as ACTION_TYPES from '../constant/actionTypes';

export const fetchProductData =payload=>({
    type:ACTION_TYPES.FETCH_PRODUCT_DATA,
    payload:payload
})
export const utillSuccess = (data, serviceID) => ({
	type: ACTION_TYPES.UTILL_SUCCESS,
	payload: data,
	id: serviceID
});
export const handleFilterButtonClick=payload=>({
	type:ACTION_TYPES.HANDLE_FILTER_BUTTON_CLICK,
    payload:payload
})
export const handleSortButtonClick=payload=>({
	type:ACTION_TYPES.HANDLE_SORT_BUTTON_CLICK,
    payload:payload
})
export const closeModalPopUpContent=payload=>({
	type:ACTION_TYPES.CLOSE_MODAL_POPUP,
    payload:payload
})
export const closeSortPopUpContent=payload=>({
	type:ACTION_TYPES.CLOSE_SORT_POPUP,
    payload:payload
})
export const setParentFilterIndex=payload=>({
	type:ACTION_TYPES.SET_PARENT_FILTER_INDEX,
    payload:payload
})
export const setSubFilterIndex=payload=>({
	type:ACTION_TYPES.SET_CHILD_AGGREGATION_INDEX,
    payload:payload
})
export const applyFilter=payload=>({
	type:ACTION_TYPES.APPLY_FILTER,
    payload:payload
})
export const resetFilter=payload=>({
	type:ACTION_TYPES.RESET_FILTER,
    payload:payload
})
export const setSortingStatus=payload=>({
	type:ACTION_TYPES.SET_SORTING_STATUS,
	payload:payload
})
