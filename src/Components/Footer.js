import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div class="max-width">
                    <div class="list_1">
                        <img class="footer-logo" src="images/logo.svg" alt="logo" />
                        <div class="icons">
                            <a href=""><img src="images/icon-facebook.svg" alt="icon-facebook" /></a>
                            <a href=""><img src="images/icon-youtube.svg" alt="icon-youtube" /></a>
                            <a href=""><img src="images/icon-twitter.svg" alt="icon-twitter" /></a>
                            <a href=""><img src="images/icon-pinterest.svg" alt="icon-pinterest" /></a>
                            <a href=""><img src="images/icon-instagram.svg" alt="icon-instagram" /></a>
                        </div>
                    </div>
                    <div class="ul-list">
                        <div class="list_2">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">About Us</a></li>
                            </ul>
                        </div>
                        <div class="list_3">
                            <ul>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Community</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="list_4">
                        <form action="">
                            <input type="text" placeholder="Updates in your inbox..." />
                            <button>Go</button>
                        </form>
                        <p>Copyright 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;