import './App.css';
import Nav from './Nav';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<h1>Product Listing Component</h1>} />
    <Route path="/add" element={<h1>Add Product Listing Component</h1>} />
    <Route path="/update" element={<h1>Update Product Listing Component</h1>} />
    <Route path="/delete" element={<h1>Delete Product Listing Component</h1>} />
    <Route path="/logout" element={<h1>Update Product Listing Component</h1>} />
    <Route path="/profile" element={<h1>Profile Listing Component</h1>} />
    

   
   </Routes>
  </BrowserRouter>

  );
}

export default App;
