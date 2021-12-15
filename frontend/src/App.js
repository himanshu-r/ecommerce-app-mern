import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import {Route, Routes } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";




function App() {
  return (
        <>
        <Header/>
      <main>
        <Container>

        <Routes>
            <Route >        
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product" element={<ProductScreen />} />
            </Route>
        </Routes>
        </Container>
      </main>
        
    

        {/* <main className="py-3">
          <Container>

            <HomeScreen />
            <ProductScreen />            
            
          </Container>
        </main> */}

        <Footer />
    
        
    </>
            
  );
}

export default App;
