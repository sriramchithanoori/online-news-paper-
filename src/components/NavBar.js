import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import News from './News';



export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

 
 
  handle= event=>{
    event.preventDefault();
    const inputValue1 = event.target.value;
    this.props.onData1(inputValue1);

  }

  
  handleSubmit(event) {
    event.preventDefault();
    const inputValue = this.inputRef.current.value;
  
    this.props.onData(inputValue);
   
    
  }
    
  render() {
    return (
      <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info-subtle fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{this.props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link active" to ="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link active" to ="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link active" to ="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link active" to ="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link active" to ="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link active" to ="/technology">Technology</Link></li>
        <li className="nav-item"><Link className="nav-link active" to ="/sports">Sports</Link></li>
        <li className="nav-item"> <Link className="nav-link active" to ="/search" >Search</Link></li>
        <li className="nav-item"> <Link className="nav-link active" to ="/ref" >Refresh</Link></li>
        
        
        <select 
        className="btn btn-outline-warning"
          id="my-select" 
        >
           <option>Sort By</option>
          <option onClick={this.handle}  value="relevancy" >relevancy</option>
          <option onClick={this.handle} value="popularity">popularity</option>
          <option onClick={this.handle} value="publishedAt">publishedAt</option>
        </select>
        
       
       

       </ul>
       <form className="d-flex" onSubmit={this.handleSubmit} >
       <input ref={this.inputRef} className="form-control me-2" type="text"  placeholder="Search" aria-label="Search "/>
      
       <button type="submit" className="btn btn-outline-success">Search</button> 
       </form>
      
      
    </div>
    </div>
</nav>
   
      </>
    )
  }
}
