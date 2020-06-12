import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetail = (props) =>{
    const { project } = props;
    if(project) {
        return(
            <div className="container section project-detail" key={project.key}> 
                <div className="card z-depth-1">
                    <div className="card-content">
                        <span className="card-title">
                            {project.title}
                        </span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-5 grey-text">
                        <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                        <div>9th june 9:30pm</div>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className="container center" key={Math.random()}>
                Project Loading...
            </div>
            )
    }
}

const mapStateToProps = (state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project : project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects'}
    ])
)(ProjectDetail);
