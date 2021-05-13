
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component
import { Contact } from './components/Contact';
import { NavigationBar } from './components/NavigationBar';
import  ScrollToTop  from'./components/ScrollToTop';
import CategorySection from './components/CategorySection';
import { VendorList }  from './components/VendorList';
import { Footer } from './components/Footer';
import { Vendor } from './components/Vendor';

// Data
import { categoryData } from './data/categoryData';
import { vendorList } from './data/foodVendorList';



function App() {
  const [selectedCategory, setSelectedCategory] = useState('Food');

    return (
    <Router>
       <Switch>
         <Route exact path='/'>
            <NavigationBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <CategorySection category = {categoryData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <VendorList selectedCategory= {selectedCategory}></VendorList>

            <Contact/>
            <ScrollToTop/>
            <Footer/>
          </Route>

          <Route path='/vendor'>
            <Vendor/>
          </Route>
       </Switch>

    </Router>
    );
}

export default App;
