
import React, { Component } from 'react';
import img from './error.jpg';
export default class NewsItem extends Component {
  
  render() {
    let {title, discription, imagesrc, urllink,author,time,name} = this.props
   
    return (

      
      <div>

        <div className="card shadow-lg bg-body-tertiary rounded" >
  <img src={imagesrc?imagesrc:img} width="250" height="200" className="card-img-top" alt="loading.."/>
  <div className="card-body">

    <h5 className="card-title ">{title}...</h5>
    <span className="position-absolute top-0 start-0 translate-start badge rounded-pill bg-danger">
   {name}
  </span>

    <p className="card-text">{discription}...</p>
    <p className="card-text text-muted">by {author?author:"unknown"} on {time}</p>
    <a href= {urllink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to News</a>
  </div>
</div>
      </div>
    )
  }
}
