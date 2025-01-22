
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
const Weather = () => {
    const toggle = (param) => {
        // console.log(param);
    }
    return(
        <>
           <Header name={toggle}/>
           <Main toggle={toggle}/>
           <Footer toggle={toggle}/>
        </>
    )
}

export default Weather;