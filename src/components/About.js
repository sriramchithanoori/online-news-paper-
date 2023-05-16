import React, { Component } from 'react'

export default class NavBar extends Component {
  

  render() {
    return (
      <div className='container my-3 gap left-component '>
        <h1 className='text-center'>About us</h1>
        <h2>
            Introduction
        </h2>
        <p>The News  app allows users to browse through news headlines for different categories such as Top Stories,
             General, Business, Technology, Entertainment, and so on. Furthermore, 
             the app lets users glance through the news and weather conditions. 
             The app makes use of Integration and Orchestration services of Quantum 
             Fabric to fetch data from third-party APIs, and then populates the data to the front end of the app.
      </p>
      <h2>
        App Functinality
      </h2>
      <p>The News  app is an omni-channel application. This section explains the functionality of the News 
        and Weather app in Mobile, Tablet, and Desktop Web platforms .
        <h5>You can read news accordiing to categories and also by counrty.</h5>
        <h5>Search your fav news by clicking on search menu and search to get required news.</h5>
        <h5>Sort your news by popularity, publishedAt, relevent </h5>
        <h5>Also fetch the exact news form and to a specific date</h5>
        Note : The news fetching by using SORT and DATE changes is applied in next refesh.
        </p>
        <h2>
        Contact
      </h2>
      <p>You can find me at sairaj505@protonmail.com.com</p>
        
      </div>
        
    
    )
  }
}
