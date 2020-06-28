import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Header extends Component {
  state={uid:localStorage.getItem('uid')};
  signout=()=>
  {
    if(window.confirm("Do u want to logout ?"))
    {
    localStorage.removeItem("uid");
    this.props.history.push("/");
    }
  }
  componentDidMount()
  {
    if(localStorage.getItem("uid")==undefined)
    {
      alert("First u login the page");
      this.props.history.push("/");
    }
  }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/dashboard">Admin Panel</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/changepassword">Change Password</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Welcome : {this.state.uid}</Link>
      </li>
      <li className="nav-item">
        <a href="javascript:void(0)" className="nav-link" onClick={this.signout}>Logout</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
            </div>
        )
    }
}

export default Header
