import React, { Component } from 'react';
import './Nav_Bar.css';
class Nav_Bar extends Component {
    constructor(props){
    super(props)
    this.state={
        status: false,
    }}
    toggle =()=>{
        this.setState({
            status: !this.state.status
        })
    }
    render() {
        console.log(this.state);
        return (
            <div className="intro">
                <div className="max-width">
            <div className="navbar">
                <img className="logo" src="images/logo.svg" alt="logo" />
                <ul>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Community</a></li>
                </ul>
                <button className="btn">Get Started</button>
                <img className="Menu__Icon" src="images/icon-hamburger.svg" alt="icon-nav" onClick={this.toggle}/>
            </div>
            <div className={!this.state.status ?("show"):("show hide")}>
            <ul>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Community</a></li>
                </ul>
            </div>
            </div>
            </div>

        );
    }
}

export default Nav_Bar;