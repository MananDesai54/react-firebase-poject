import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';

const Navbar = () =>{
    return (
        <nav className="nav nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    Know-Where
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        firebase:state.firebase
    }
}

export default connect(mapStateToProps)(Navbar);