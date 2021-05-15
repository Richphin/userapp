 import { createStore } from 'redux'
import usersReducer from '../reducers/userRedecer'
 


 export const store = createStore(usersReducer)