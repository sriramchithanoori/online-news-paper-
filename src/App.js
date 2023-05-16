//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom"

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import Contents from './components/Contents';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sea: "",
      count:16,
      sort:"",
      date1:"",
      date2:"",
    };
  }
  handleData = (data) => {
     //sea= data;
     this.setState({ sea: data ,count: this.state.count + 1 });
     //alert(sea);
  }
  handleData1 = (data1) => {
   
    this.setState({ sort:data1 });
   //alert(this.state.sort);
 }
 handle = (data) => {
    
  this.setState({ date1: data });
 
}
handle1 = (data1) => {

 this.setState({ date2:data1 });

};


  render() {
    return (<Router>
      <div ><NavBar title="Quick News " onData={this.handleData} onData1={this.handleData1}/>
      <div className="right-component">
          <Contents  onData={this.handle} onData1={this.handle1}/>
        </div>
      <div className='container'  >
      <Routes>
    
      <Route exact path="/ref" element={<News key={this.state.count-2*3} sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} catogory ="general"/>}></Route>
      <Route exact path="/" element={<News key="1" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} catogory ="general"/>}></Route>
      <Route exact path="/entertainment" element={<News key="2" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} catogory ="entertainment" />}></Route>
      <Route exact path="/business" element={<News key="3"sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} catogory ="business"/>}></Route>
      <Route exact path="/health" element={<News key="4" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} catogory ="health"/>}></Route>
      <Route exact path="/science" element={<News key="5" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} catogory ="science"/>}></Route>
      <Route exact path="/sports" element={<News key="6" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} catogory ="sports"/>}></Route>
      <Route exact path="/technology" element={<News key="7"sort ={this.state.sort} date={this.state.date1} date1={this.state.date2}catogory ="technology"/>}></Route>
      <Route exact path="/in" element={<News key="9" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="in"/>}></Route>
      <Route exact path="/us" element={<News key="8" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="us"/>}></Route>
      <Route exact path="/uk" element={<News key="10" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="gb"/>}></Route>
      <Route exact path="/au" element={<News key="11" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="au"/>}></Route>
      <Route exact path="/ca" element={<News key="12" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="ca"/>}></Route>
      <Route exact path="/ru" element={<News key="13" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="ru"/>}></Route>
      <Route exact path="/fr" element={<News key="14" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="fr"/>}></Route>
      <Route exact path="/ch" element={<News key="15" sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} country="ch"/>}></Route>
      <Route exact path="/search" element={<News key={this.state.count} sort ={this.state.sort} date={this.state.date1} date1={this.state.date2} search= {this.state.sea}/>}></Route>
      
      

      <Route exact path="/about" element={<About/>}></Route>
     </Routes>
    
      </div></div></Router>
    )
  }
}
