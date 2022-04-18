import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, producDetailsReducer } from './reducers/productReducers'

const reducer = combineReducers({
  productList: productListReducer,
  producDetails: producDetailsReducer
})

const initialState = {}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
