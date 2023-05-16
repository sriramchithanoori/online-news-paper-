import React, { Component } from 'react';
import './Component.css';

import { Link } from "react-router-dom";

export default class Contents extends Component {
   today = new Date();
 dd = String(this.today.getDate()).padStart(2, '0');
 mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
 yyyy = this.today.getFullYear();

today1 = this.yyyy + '-' + this.mm + '-' + this.dd;
handle= event=>{
  event.preventDefault();
  var inputElement = document.getElementById("DOB");
  var inputElement1 = document.getElementById("DOB1");
  var inputValue = inputElement.value;
  var inputValue1 = inputElement1.value;
  //alert(inputValue1 + inputValue);
  this.props.onData(inputValue);
  this.props.onData1(inputValue1);

}

  render() {
    return (
      <div>
        <div className="list-group bg-success-subtle p-1 position-fixed ">
   <h5 className='bg-warning-subtle pad text-center'><b>Select-Country</b></h5>
  <Link to="/in" className="list-group-item list-group-item-action bg-info-subtle">INDIA</Link>
  <Link to="/us" className="list-group-item list-group-item-action bg-info-subtle">UNITED STATES</Link>
  <Link to="/uk" className="list-group-item list-group-item-action bg-info-subtle">UNITED KINGDOM</Link>
  <Link to="/au" className="list-group-item list-group-item-action bg-info-subtle">AUSTRALIA</Link>
  <Link to="/ca" className="list-group-item list-group-item-action bg-info-subtle">CANADA</Link>
  <Link to="/fr" className="list-group-item list-group-item-action bg-info-subtle">FRANCE</Link>
  <Link to="/ru" className="list-group-item list-group-item-action bg-info-subtle">RUSSIA</Link>
  <Link to="/ch" className="list-group-item list-group-item-action bg-info-subtle">CHINA</Link>
  <form  onSubmit={this.handle}>
    <h4>Select date:</h4>
  <h5>From</h5>
  <input className='btn btn-outline-info' type="date" id="DOB" placeholder="from"name="DOB"min="2010-01-01" max={this.today1}/>
  <h5>To</h5>
 <input className='btn btn-outline-info' type="date" id="DOB1" placeholder="from"name="DOB"min="2010-01-01" max={this.today1}/>
 
 <li><button type="submit" className="btn btn-outline-primary">Fetch</button> </li>
 </form>
</div> 

      </div>
    )
  }
}
