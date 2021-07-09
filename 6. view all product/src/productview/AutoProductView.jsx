import React from "react";
import ProductView from "./ProductView";

function AutoProductView(props){
    return(
        <>

        <ProductView
        
        product_view_link={props.product_view_link}
        product_view_image={props.product_view_image}
        product_view_pname={props.product_view_pname}
        product_view_otherinfo={props.product_view_otherinfo}
        product_view_Rating={props.product_view_Rating}
        product_view_p_actual_price={props.product_view_p_actual_price} 
        product_view_p_mrp={props.product_view_p_mrp}
        product_view_p_discount={props.product_view_p_discount}
        

         />

        </>
    );
}

export default AutoProductView;