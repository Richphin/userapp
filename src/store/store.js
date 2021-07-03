 import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/userRedecer'
import { getFirebase,reduxReactFirebase,firebaseReducer } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from 'redux-thunk';
 
const Allreducers =combineReducers({
    userState:usersReducer,
    firebasestate: firebaseReducer,
})

 export const store = createStore(Allreducers,compose(
     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
     reduxReactFirebase(firebase),
     reduxFirestore(firebase)
 ));
 