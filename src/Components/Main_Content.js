import React, { Component } from 'react';
import './Main_Content.css';

class Main_Content extends Component {

    render() {
        return (

            <div className="intro_width">
                <div className="intro-content">
                    <div className="intro-heading">
                        <h1>Bring everyone together to build better products.</h1>
                        <p>Manage makes it simple for software teams to plan day-to-day
                            tasks while keeping the larger team goals in view.</p>
                        <button className="main_btn">Get Started</button>
                    </div>
                    <div className="intro-img">
                        <img src="images/illustration-intro.svg" alt="illustration-intro" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Main_Content;