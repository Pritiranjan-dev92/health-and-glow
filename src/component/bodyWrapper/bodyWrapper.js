import React, { useContext } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import Footer from '../Footer/Footer';
import ModalComponent from '../modalComponent/modalComponent';
import SortingPopup from '../SortingPopup/SortingPopup';
import { ProductContext } from '../../App';

const BodyWrapper = (props) => {
    const { displayFilterContent, displaySortContent } = useContext(ProductContext);
    return (<div>
        <ProductDetails />
        <Footer />
        {displayFilterContent ? <ModalComponent /> : null}
        {displaySortContent ? <SortingPopup /> : null}
    </div>)
}
export default BodyWrapper;