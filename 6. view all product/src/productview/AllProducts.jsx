import React from "react";

import AutoProductView from "./AutoProductView";
import ProductViewData from "./ProductViewData";

function AllProducts(props){
    return(
        <>
           <div className="main">
        
         {ProductViewData.map(AutoProductView)}

           </div>
        </>
    );
}

export default AllProducts;