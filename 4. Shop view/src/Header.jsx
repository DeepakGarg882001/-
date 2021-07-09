import React from "react";


import Search_Bar from "./Search_bar";
import Select_Range from "./Select_Range.jsx";

function Header(){
    return(
        <>
         <div className="header">
              <Search_Bar></Search_Bar>
              <Select_Range></Select_Range>
         </div>
        <br></br><br></br><br></br><br></br><br></br>
        </>
    );
}

export default Header;