import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ProductContext } from '../../App';
import * as action from '../../action';
import './SortingPopup.css';
const SortingPopup = () => {
    const { sorts, productData } = useContext(ProductContext);
    const { Price } = sorts;
const dispatch=useDispatch();    
return (<div className="sortingPopup">
        <ul>
            {Price.map((item) => {
                return <li onClick={()=>dispatch(action.setSortingStatus(item.order))}>{item.text}</li>
            })}
        </ul>
        <button>Close</button>
    </div>)
}
export default SortingPopup;