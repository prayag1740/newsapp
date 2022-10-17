import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      total_results: 0,
    };
  }

  //Lifecycle method run after render method is called ; used for loading of data
  componentDidMount() {
    this.fetchNewsData(this.state.page); //intially fetch data for 1st page
  }

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    this.fetchNewsData(this.state.page + 1);
  };

  handlePrevClick = () => {
    this.setState({ page: this.state.page - 1 });
    console.log(this.state.page);
    this.fetchNewsData(this.state.page - 1);
  };

  async fetchNewsData(page) {
    let todayDate = this.getCurrentDate();
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=${todayDate}&sortBy=publishedAt&apiKey=7d248d9c8ea64fa6a4691432a30a74ac&pageSize=${this.props.pageSize}&page=` +
      page;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      total_results: parsedData.totalResults,
    });
  }

  showNextButton() {
    return (
      this.state.page + 1 >
      Math.ceil(this.state.total_results / this.props.pageSize)
    );
  }

  getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  }

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          {" "}
          NewsMonkey -- Top Headlines
        </h1>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt.slice(0, 10)}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.showNextButton()}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
