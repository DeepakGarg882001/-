import React from "react";


import AutoTopSlider from "./AutoTopSlider";
import TopslideData from "./TopslideData";

function TopSlide(props){
    return(
        <>
         <div>
             <ol className="ol_list">

               {TopslideData.map(AutoTopSlider)}

             </ol>
         </div>
        </>
    );
}

export default TopSlide; 