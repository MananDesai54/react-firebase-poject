import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';

const Navbar = ({ firebase,profile }) =>{

    const links = firebase.uid ? <SignedInLinks initial={profile.initials}/>:<SignedOutLinks />
    return (
        <nav className="nav nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    Know-Where
                </Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return {
        firebase:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);