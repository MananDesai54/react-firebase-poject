import React from 'react';
import moment from 'moment';

const Notification = ({ notifications })=>{

    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notification</span>
                    <ul>
                        { notifications && notifications.map(notification=>{
                            return (
                                <li key={notification.id}>
                                    <span className="pink-text">{notification.user}</span>
                                    <span> {notification.content}</span>
                                    <div className="grey-text">
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification;