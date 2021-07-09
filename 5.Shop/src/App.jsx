import React from 'react';

import './css/index.css';
import './css/catalog.css';
import './css/catalog1.css';
import './css/catalog2.css';
import './css/catalog4.css';
import './css/catalog5.css';
import './css/catalog6.css';


import Header from "./Header";

import TopSlide from "./top-slider/TopSlide";



import AllCatalogData from "./AllCatalogData";
import AllCatalogAutomatic from "./AllCatalogAutomatic";
import SlideShow from './slideshow/SlideShow';


function App(props){
return(
<>

    <Header></Header>
    <TopSlide></TopSlide>
    <SlideShow></SlideShow>
    
    {AllCatalogData.map(AllCatalogAutomatic)}


</>
);
}

export default App;