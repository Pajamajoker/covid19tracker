import React, { Component } from 'react'
import './App.css';
import Cards from './components/Cards/Cards'
import Count from './components/Count/Count'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api/index'
import image from './cov.png';
import { StylesProvider } from '@material-ui/core';
export default class App extends Component {
  state={
    data:{},
  }
  async componentDidMount()
  {
      const fetchedData=await fetchData();
      console.log(fetchedData);
      this.setState({data:fetchedData});
  }
  render() {
    const {data}=this.state
    return (
      <div>
      <img className="logoImage" src={image} alt="COVID-19" />
      <Cards cardData={data}/>
      <Count countData={data.cases_time_series}/>
      
      </div>
    )
  }
}
