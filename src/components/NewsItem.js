import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props ;
    let defaultImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F1ENjVxhiWtm7LCwLFhgiW9%2F3132b27acddbfab3131686ea80310fdc%2Fconducting-usability-test_yon4BQT.svg&imgrefurl=https%3A%2F%2Fwww.hotjar.com%2Fusability-testing%2Fprocess-examples%2F&tbnid=RfcanOTfNU2P-M&vet=12ahUKEwiM5J27-d_6AhVDi9gFHXu4BqUQMygCegUIARDeAQ..i&docid=ipEmDD0rz65fGM&w=800&h=534&q=test&hl=en&ved=2ahUKEwiM5J27-d_6AhVDi9gFHXu4BqUQMygCegUIARDeAQ'
    
    return (
        <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl ? defaultImage : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem