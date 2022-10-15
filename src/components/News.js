import React, { Component } from 'react'
import NewsItem from './NewsItem'

const pageSize = 10
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            total_results: 0
        }
    }

    //Lifecycle method run after render method is called ; used for loading of data
    componentDidMount() {
        this.fetchNewsData(1) //intially fetch data for 1st page
    }

    handleNextClick = () => {
        this.setState({page: this.state.page + 1})
        console.log(this.state.page)
        this.fetchNewsData(this.state.page+1)
    }

    handlePrevClick = () => {
        this.setState({page: this.state.page - 1})
        console.log(this.state.page)
        this.fetchNewsData(this.state.page-1)
    }

    async fetchNewsData(page){
        let url = `https://newsapi.org/v2/everything?q=india&from=2022-09-14&sortBy=publishedAt&apiKey=7d248d9c8ea64fa6a4691432a30a74ac&pageSize=${pageSize}&page=` + page 
        let data = await fetch(url) ;
        console.log(data)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, total_results: parsedData.totalResults})
    }

    showNextButton() {
        return this.state.page + 1 > Math.ceil(this.state.total_results/pageSize)
    }

  render() {
    return (
      <div className='container my-3'>
        <h2> NewsMonkey -- Top Headlines</h2>
        <div className='row'>
            {this.state.articles.map((element) => {
                return <div className='col md-4' key={element.url}>
                   <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)}
                    imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div> 
            })}
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button disabled={this.showNextButton()} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
      </div>
      </div>
    )
  }
}

export default News