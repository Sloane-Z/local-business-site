
import React, { Component, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import {Element} from 'react-scroll';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './components/Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

import CategorySection from './components/CategorySection';
import { VendorList } from './components/VendorList';
// Data
import { categoryData } from './data/categoryData';
import { vendorList } from './data/foodVendorList';



function App() {
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const scrollToDiv = (ref) => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'});
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
    return (
    <Router>

      <NavigationBar clickToScroll={()=> scrollToDiv()}/>
      <CategorySection reference={el1} clickToScroll={()=> scrollToDiv(el2)} category = {categoryData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <VendorList reference={el2}  data = {vendorList} selectedCategory= {selectedCategory} ></VendorList>

      <Contact/>

    </Router>
    );
}

export default App;
