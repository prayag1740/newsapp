import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 8 ;
  apiKey = process.env.REACT_APP_NEWS_API_KEY


  state = {progress: 0, searchText: ''}

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  setSearchText = (searchText) => {
    this.setState({searchText: searchText})
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar searchText={this.setSearchText} />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>
        <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={'in'} category={'general'} />}></Route> 
          <Route exact path='/home' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={'in'} category={'general'} />}></Route> 
          <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={'in'} category={'business'} />}></Route>
          <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'} />}></Route>
          <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={'in'} category={'health'} />} ></Route>
          <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={'in'} category={'science'} />}></Route>
          <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country={'in'} category={'sports'} />}></Route>
          <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country={'in'} category={'technology'} />}></Route>
          <Route exact path='/search' element={<News searchText={this.state.searchText} apiKey={this.apiKey} setProgress={this.setProgress} key={this.state.searchText} pageSize={this.pageSize} country={'in'} category={'general'} />}></Route>
        </Routes>
        </Router>
      </div>

    )
  }
}
