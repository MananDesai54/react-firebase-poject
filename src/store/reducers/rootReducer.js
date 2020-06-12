import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projecReducer from './projecReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth:authReducer,
    project:projecReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer;