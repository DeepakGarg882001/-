import React from 'react';

import './index.css';


import Header from "./Header";
import All_Shop_Data from "./All_Shop_Data";
import Allshops from "./Allshops";


function App(props){
return(
<>
<div className="grandmain">
 <Header></Header>
 
 {All_Shop_Data.map(Allshops)}

 </div>


</>
);
}

export default App;