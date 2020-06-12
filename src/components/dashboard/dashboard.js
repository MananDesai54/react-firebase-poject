import React from 'react';
import Notification from './notification';
import ProjectList from '../projects/projectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends React.Component {

    render() {
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="project-list col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="notification col s12 m5 offset-m1">
                        <Notification />
                    </div>             
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        projects:state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects' }
    ])
)(Dashboard);