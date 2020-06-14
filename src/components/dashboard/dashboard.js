import React from 'react';
import Notification from './notification';
import ProjectList from '../projects/projectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {

    render() {
        const { projects,auth,notifications } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="project-list col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="notification col s12 m5 offset-m1">
                        <Notification notifications={notifications}/>
                    </div>             
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        projects:state.firestore.ordered.projects,
        notifications:state.firestore.ordered.notifications,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects', orderBy:['createdAt','desc'] },
        { collection :'notifications', limit:4, orderBy:['time','desc'] }
    ])
)(Dashboard);