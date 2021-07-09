import React from 'react';

import './css/index.css';
import './css/productview.css';

import Header from "./Header";
import AllProducts from "./productview/AllProducts"

function App(props){
return(
<>

    <Header></Header>
     
     <AllProducts></AllProducts>
    </>
);
}

export default App;