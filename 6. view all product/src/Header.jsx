import React from "react";


function Header(){
    return(
        <>
<div className="grand_parent">

       <div className="header">
 
         <div className="backarrow">
            <i className="fas fa-long-arrow-alt-left" id="backarrow_icon"></i>
         </div>

         <div className="search">
            <input id="bar" type="search" placeholder="  Search..." ></input>
         </div>

         <div className="cart">
            <i id="cart_icon" className="fa fa-shopping-cart"></i>
         </div>

       </div>
       <br></br><br></br><br></br><br></br><br></br>
       </div>  
        </>
    );
}

export default Header;