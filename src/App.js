
import React, { Component, useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Contact } from './components/Contact';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import  ScrollToTop  from'./components/ScrollToTop';
import CategorySection from './components/CategorySection';
import { VendorList } from './components/VendorList';
import { Footer } from './components/Footer';

// Data
import { categoryData } from './data/categoryData';
import { vendorList } from './data/foodVendorList';



function App() {
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [vendors, setVendors] = useState();

  const scrollToDiv = (ref) => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'});
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();

  useEffect(()=> {
    fetch('http://backend.stjohnslocalguide.com/v1/vendors')
    .then(res => res.json()).then((data) => {         
      setVendors(data);
    })
    .catch(console.log);
  },[]);

    return (
    <Router>
       
      <NavigationBar clickToScroll={()=> scrollToDiv(el2)}  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <CategorySection reference={el1} clickToScroll={()=> scrollToDiv(el2)} category = {categoryData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <VendorList reference={el2}  data = {vendorList} selectedCategory= {selectedCategory} vendors={vendors}></VendorList>

      <Contact/>
      <ScrollToTop/>
      <Footer></Footer>
    </Router>
    );
}

export default App;
