import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';
import Men from './pages/Men';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Service from './pages/Service';

function App() {
  return (
 <BrowserRouter>
 <Routes>


<Route path='/' index element={<><Header/><Men/><Footer/></>}></Route>
<Route path='/about' index element={<><Header/><About/><Footer/></>}></Route>
<Route path='/service' index element={<><Header/><Service/><Footer/></>}></Route>
<Route path='/contact' index element={<><Header/><Contact/><Footer/></>}></Route>
<Route path='/blog' index element={<><Header/><Blog/><Footer/></>}></Route>



 </Routes>
 </BrowserRouter>
  );
}

export default App;
