import * as action_Types from '../constant/actionTypes';
const initialState = {
    aggregations: null,
    productData: [],
    sorts: null,
    displayFilterContent: false,
    displaySortContent:false,
    parentFilterIndex:null,
    childFilterIndex:null,
    filteredProductData:null
}
function utillReducers(state = initialState, action) {
    if (action.type == action_Types.UTILL_SUCCESS) {
        let { id } = action
        switch (id) {
            case action_Types.SET_PRODUCT_DATA:
                console.log(action)
                return Object.assign({}, state, {
                    productData: action.payload.products,
                    aggregations: formatData(action.payload.aggregations, "buckets"),
                    sorts: formatData(action.payload.sorts, "orders")
                }
                )
            case action_Types.HANDLE_FILTER_BUTTON_CLICK:
                return Object.assign({}, state, {
                    displayFilterContent: true
                }
                )
            case action_Types.HANDLE_FILTER_BUTTON_CLICK:
                    return Object.assign({}, state, {
                        displayFilterContent: true,
                        displaySortContent:false
                    }
                    )
            case action_Types.CLOSE_MODAL_POPUP:
                    return Object.assign({}, state, {
                        displayFilterContent: false
                    }
                    )
            case action_Types.CLOSE_SORT_POPUP:
                        return Object.assign({}, state, {
                            displaySortContent: false
                        }
                        )  
            case action_Types.HANDLE_SORT_BUTTON_CLICK:
                return Object.assign({}, state, {
                    displaySortContent: true,
                    displayFilterContent:false
                }
                ) 
            case action_Types.SET_PARENT_FILTER_INDEX:
                    return Object.assign({}, state, {
                        parentFilterIndex: action.payload
                    }
                    )  
            case action_Types.SET_CHILD_AGGREGATION_INDEX:
                            return Object.assign({}, state, {
                                childFilterIndex: action.payload
                            }
                            )   
            case action_Types.APPLY_FILTER:
                                return Object.assign({}, state, {
                                    filteredProductData: state.productData.filter(item => item.categoryName === state.childFilterIndex),
                                    displayFilterContent:false
                                }
                                )
             case action_Types.RESET_FILTER:
                return Object.assign({}, state, {
                    filteredProductData: null,
                    displayFilterContent:false,
                    parentFilterIndex:null,
                    childFilterIndex:null
                }
                ) 
            case action_Types.SET_SORTING_STATUS:
                console.log('action',action)
                return Object.assign({}, state, {
                   productData:(action.payload=='asc')?state.productData.sort((a,b)=>a.defaultPrice-b.defaultPrice):state.productData.sort((a,b)=>b.defaultPrice-a.defaultPrice),
                   filteredProductData:(state.filteredProductData)?(action.payload=='asc')?state.filteredProductData.sort((a,b)=>a.defaultPrice-b.defaultPrice):state.filteredProductData.sort((a,b)=>b.defaultPrice-a.defaultPrice):null,
                   displaySortContent:false

                }
                )                   
        }
    }
    return state;

}
function formatData(data, column) {
    let responseObj = {};
    data.forEach(item => {
        responseObj[item.text] = item[column];
    });
    return responseObj;
}
export default utillReducers;