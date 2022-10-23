import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {

    constructor(props) {
        super(props) ;
        this.textInput = React.createRef() ;
    }

  render() {
    return (
      <div>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/home">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={this.textInput} />
        <Link to="/search" refresh="true">
        <button className="btn btn-outline-success" type="submit" onClick={() => this.props.searchText(this.textInput.current.value)}>Search</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar