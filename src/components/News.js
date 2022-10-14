import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    //Lifecycle method run after render method is called ; used for loading of data
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=india&from=2022-09-14&sortBy=publishedAt&apiKey=7d248d9c8ea64fa6a4691432a30a74ac"
        let data = await fetch(url) ;
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
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
      </div>
    )
  }
}

export default News