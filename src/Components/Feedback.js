import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
    render() {
        return (
            <>
                <div className="Feedback__Cards">
                    <h1>What they've said</h1>
                    <div className="Cards">
                        <div className="item">
                            <img src="images/avatar-anisha.png" alt="anisha" />
                            <h5>Anisha Li</h5>
                            <p>“Manage has supercharged our team’s workflow. The ability to maintain
                                visibility on larger milestones at all times keeps everyone motivated.”</p>
                        </div>
                        <div className="item">
                            <img src="images/avatar-ali.png" alt="avatar-ali" />
                            <h5>Ali Bravo</h5>
                            <p>“We have been able to cancel so many other subscriptions since using
                                Manage. There is no more cross-channel confusion and everyone is much
                                more focused.”</p>
                        </div>
                        <div className="item">
                            <img src="images/avatar-richard.png" alt="avatar-richard" />
                            <h5>Richard Watts</h5>
                            <p>“Manage allows us to provide structure and process. It keeps us organized
                                and focused. I can’t stop recommending them to everyone I talk to!”</p>
                        </div>
                   
                    </div>
                    <button className="btn">Get Started</button>

                </div>

            </>
        );
    }
}

export default Feedback;