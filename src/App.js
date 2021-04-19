
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

import CategorySection from './components/CategorySection';
import VendorList from './components/VendorList';
// Data
import { categoryData } from './data/categoryData';
import { vendorList } from './data/foodVendorList';




function App() {

  const [selectedCategory, setSelectedCategory] = useState('');



    return (

        <Router>
          <NavigationBar />
          <Jumbotron />
          <CategorySection category = {categoryData} setSelectedCategory={setSelectedCategory}/>
          <VendorList data = {vendorList} selectedCategory= {selectedCategory} ></VendorList>
        </Router>

    );

}

export default App;
