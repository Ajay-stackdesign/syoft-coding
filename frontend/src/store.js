import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"


import { composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from "./reducer/userReducer"
import { getSingleBookReducer, newProductReducer, productReducer, productsReducer } from "./reducer/productReducer"

const reducer = combineReducers({
    user: userReducer,
    newProduct: newProductReducer,
    updateProduct: productReducer,
    products: productsReducer,
    single: getSingleBookReducer,
})

let initialStage = {
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store