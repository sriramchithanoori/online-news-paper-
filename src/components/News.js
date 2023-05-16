import React, { Component } from "react";
import "./Component.css";
import NewsItem from "./NewsItem";
import Loading from "./Loading";


export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      
    };
  } 
 

   
  async componentDidMount() {
    let country1 = this.props.country;
    let category1 = this.props.catogory? this.props.catogory : "general";
    let que;
    if (this.props.country) {
      que = `https://newsapi.org/v2/top-headlines?country=${country1}&category=${category1}`;
    } else {
      que = `https://newsapi.org/v2/everything?q=${category1}`;
    }
   
    let search = `https://newsapi.org/v2/everything?q=${this.props.search}`;

    let ques = this.props.search ? search : que;  
     
      //console.log(ques)
    
    let url = `${ques}&from=${this.props.date}&to=${this.props.date1}&sortBy=${this.props.sort}&apiKey=8f9b35c4b3f24c1da9aa72d2b37148cd&page=1&pagesize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }


  goprevious = async () => {
    let country1 = this.props.country;
    let category1 = this.props.catogory ? this.props.catogory : "general";
    let que;
    if (this.props.country) {
      que = `https://newsapi.org/v2/top-headlines?country=${country1}&category=${category1}`;
    } else {
      que = `https://newsapi.org/v2/everything?q=${category1}`;
    }
    //let que = `https://newsapi.org/v2/top-headlines?country=${country1}&category=${category1} `;
    let search = `https://newsapi.org/v2/everything?q=${this.props.search}`;

    let ques = this.props.search ? search : que;

    let url = `${ques}&from=${this.props.date}&to=${this.props.date1}&sortBy=${this.props.sort}&apiKey=8f9b35c4b3f24c1da9aa72d2b37148cd&page=${this.state.page-1}&pagesize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading: false,
    });
  };

  gonext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) {
    } else {
      let country1 = this.props.country ;
      let category1 = this.props.catogory ? this.props.catogory : "general";
      let que;
      if (this.props.country) {
        que = `https://newsapi.org/v2/top-headlines?country=${country1}&category=${category1}`;
      } else {
        que = `https://newsapi.org/v2/everything?q=${category1}`;
      }
     
      let search = `https://newsapi.org/v2/everything?q=${this.props.search}`;

      let ques = this.props.search ? search : que;

      let url = `${ques}&from=${this.props.date}&to=${this.props.date1}&sortBy=${this.props.sort}&apiKey=8f9b35c4b3f24c1da9aa72d2b37148cd&page=${this.state.page+1}&pagesize=15`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>

        <div className="container my-3 gap left-component">
          <h3 className="text-center">
            {" "}
             INTRESTING NEWS -Topic {"==> "}{this.state.loading
              ? "Loading"
              : this.state.totalResults
              ? this.props.search
              : "NO RESULTS FOUND"} {this.props.catogory}{this.props.country}{this.props.sort?"{sort by "+this.props.sort+"}":" "} {this.props.date?"from " +this.props.date +" to "+ this.props.date1 :""}
            
          </h3>

          <div className=" row-md-3 my-3">
            {this.state.loading && <Loading />}
            {this.state.loading && <Loading />}
            {this.state.loading && <Loading />}
            {this.state.loading && <Loading />}
          </div>
          <div className="row my-3">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 100  ) : " "}
                      discription={
                        element.description
                          ? element.description.slice(0, 70)
                          : ""
                      }
                      imagesrc={element.urlToImage}
                      urllink={element.url}
                      name={element.source.name}
                      author={element.author}
                      time={element.publishedAt}
                    />
                  </div>
                );
              })}
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                onClick={this.goprevious}
                rel="noopener noreferrer"
                className="btn btn-outline-warning"
                type="submit"
              >
                &larr; Previous
              </button>
              <button
                onClick={this.gonext}
                rel="noopener noreferrer"
                className="btn btn-outline-success"
                type="submit"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
