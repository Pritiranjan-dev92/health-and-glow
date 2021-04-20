import React, { useEffect } from 'react';
import NavBar from './component/navBar/navBar';
import BodyWrapper from './component/bodyWrapper/bodyWrapper';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
export const ProductContext = React.createContext();
const App = () => {
  const dispatch = useDispatch();
  const { aggregations, productData, sorts, displayFilterContent, displaySortContent, parentFilterIndex, childFilterIndex ,filteredProductData} = useSelector(state => state.utill);
  const valueObj = {
    productData: productData,
    aggregations: aggregations,
    sorts: sorts,
    displaySortContent: displaySortContent,
    displayFilterContent: displayFilterContent,
    parentFilterIndex: parentFilterIndex,
    childFilterIndex: childFilterIndex,
    filteredProductData:filteredProductData,
    sorts:sorts

  }
  console.log('productData',productData)

  useEffect(() => {
    dispatch(actions.fetchProductData());
  }, [])
  return (
    <div className="App">
      <NavBar />
      <ProductContext.Provider value={valueObj}>
        <BodyWrapper />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
