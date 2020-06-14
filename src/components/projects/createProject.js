import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actionCreator/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends React.Component {
    state = {
        title:null,
        content:null
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.createProject(this.state);
        e.target.title.value = '';
        e.target.content.value = '';
        this.props.history.push('/');
    }

    render() {

        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="signin"/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">
                            Title
                        </label>
                        <input type="text" id="title" autoComplete="off" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">
                            Content
                        </label>
                        <textarea className="materialize-textarea" id="content" autoComplete="off" onChange={this.handleChange} ></textarea>
                    </div>
                    <div className="input-field">
                        <button className="pink darken-3 btn waves-effect waves-light">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        createProject:(project)=>{dispatch(createProject(project))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);