import { Routes, Route } from 'react-router-dom'
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Services from './component/Services';
import Navbar from './component/Navbar'
import PageNotFound from './component/PageNotFound';
import Product from './component/Product';
import Shirt from './component/products/Shirt';
import Jeans from './component/products/Jeans';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Services />} />
        <Route path='/product' element={<Product />}>
          <Route index element={<Shirt />} />
          <Route path='shirt' element={<Shirt />} />
          <Route path = 'jeans' element={<Jeans />} />
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
