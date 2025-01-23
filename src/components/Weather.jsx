
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Weather = () => {
    const [data, setData] = useState(true);
   const toggle = (newdata) => {
    setData(newdata);
   }
    return(
        <>
           <Header receiveMode={toggle}/>
           <Main mode={data}/>
           <Footer mode={data}/>
        </>
    )
}

export default Weather;