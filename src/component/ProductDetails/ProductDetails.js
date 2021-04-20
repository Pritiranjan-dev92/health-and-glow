import { getByTestId } from '@testing-library/dom';
import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import './ProductDetails.css';
const ProductDetails=() =>{
    const { productData ,filteredProductData} = useContext(ProductContext);
    const displayProdctDetails = (data) => {

        return (data)?data.map((item,index )=> {
            return <li key={`${item['skuId']} ${index}`}>
                <a >
                    <div className="productImageWrapper">
                        <img alt={item['skuName']} src={item['skuImageUrl']} />
                    </div>
                    <p>{item['skuName']}</p>
                    <div className="productBottom">
                        <span >{item['defaultPrice']}</span>
                        <button>ADD TO BAG</button>
                    </div>
                </a>
            </li>

        }):"NO PRODUCT AVILABLE"
    }
    return (<div>
        <ul className="productList">
            {displayProdctDetails((filteredProductData)?filteredProductData:productData)}
        </ul>
    </div>)
}
export default ProductDetails;