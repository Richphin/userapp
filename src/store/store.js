 import { applyMiddleware, compose, createStore } from 'redux'
import usersReducer from '../reducers/userRedecer'
import { getFirebase,reduxReactFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from 'redux-thunk';
 


 export const store = createStore(usersReducer,compose(
     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
     reduxReactFirebase(firebase),
     reduxFirestore(firebase)
 ));
 