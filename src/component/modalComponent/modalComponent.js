import './modalComponent.css';
import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import { useDispatch } from 'react-redux';
import * as action from '../../action';

const ModalComponent = () => {
    const { aggregations ,parentFilterIndex,childFilterIndex} = useContext(ProductContext);
    const dispatch=useDispatch();
    const filterList = (aggregations) ? Object.keys(aggregations) : [];
    const displayModalPopupConetent = () => {
        return filterList.map((item, index) => {
            return <li  className={parentFilterIndex ==item?'selectedModalContent':'' } onClick={()=>dispatch(action.setParentFilterIndex(item))} key={`${item}`}>{item}</li>
        })
    }
    const getSubAgreegationFilters=()=>{
        if(parentFilterIndex){
            let subData=aggregations[parentFilterIndex];
            return subData.map((item, index) => {
                return <li  className={childFilterIndex ==item.text?'selectedModalContent':'' } onClick={()=> dispatch(action.setSubFilterIndex(item.text))} key={`${item.text}`}>{item.text}</li>
            })
        }
    }
    return (<div className='modalPopUpBox'>
    <div className='flex modalContentListHeight' >
        <ul className="flex1">
            {displayModalPopupConetent()}
        </ul>
        <ul className="flex1">
            {getSubAgreegationFilters()}
        </ul>
    </div>
    <div className="">
        <button onClick={()=> dispatch(action.applyFilter())} className="">APPLY</button>
        <button onClick={()=> dispatch(action.closeModalPopUpContent())} className="whiteButton"> CLOSE</button>
        <button onClick={()=> dispatch(action.resetFilter())} className="whiteButton"> RESET FILTERS</button>
    </div>
    </div>)
};
export default React.memo(ModalComponent);