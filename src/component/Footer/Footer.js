import React from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../action';
import './Footer.css'
function Footer(){
    const dispatch=useDispatch();
    const handleFilterButtonClick=()=>{
        dispatch(action.handleFilterButtonClick());
    }
    const handleSortButtonClick=()=>{
        dispatch(action.handleSortButtonClick());
    }
    return(<div className="footer"> 
              <button onClick={()=>handleSortButtonClick()}  style={{flex:1}}>SORT</button>
              <button onClick={()=>handleFilterButtonClick()} style={{flex:1}}>FILTER</button>
    </div>)
}
export default Footer;