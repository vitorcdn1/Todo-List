import "./style.css"
import Header from "./Components/Header"
import Modal from "./Components/Modal"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import {listReducer, modalReducer} from "./Reducers/Reducer"

export default function App() {

    const store = createStore(combineReducers({
        modal: modalReducer,
        list: listReducer
    }))

    return (
    
        <div className="App">
            <Provider store={store}>
                <Header />
                <Modal />
                <Main />
                <Footer />
            </Provider>
        </div>
    )
}