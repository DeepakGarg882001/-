import React from "react";


function ProductView(props){
    return(
        <>

<div  className="box">
<a href={props.product_view_link}>
    <div  className="sub">
    
        <div  className="box_1">
            <img src={props.product_view_image} alt="plz check there may be some error in React" className="productview_image" ></img>
        </div>
        <div  className="box_2">
            <div  className="name">
                <h3> {props.product_view_pname} </h3>
            </div>
            <div  className="other_info">
                <p> {props.product_view_otherinfo} </p>
            </div>
            <div  className="rating">
                <span> {props.product_view_Rating} <span className="fa fa-star checked" id="star"></span></span>
            </div>
            <div  className="price">
                <span> {props.product_view_p_actual_price} </span></div>
            <div  className="discount">
                <span><s> {props.product_view_p_mrp} </s> <b> {props.product_view_p_discount} </b></span></div>
        </div>
      
    </div>
    </a>
</div>
        </>
    );
}
export default ProductView;