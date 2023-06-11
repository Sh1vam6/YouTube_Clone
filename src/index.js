import React from "react"
import ReactDom from "react-dom"
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './_base.scss';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'react-lazy-load-image-component/src/effects/blur.css'
import store from "./redux/store";

ReactDom.render(

    <Provider store={store}>
        <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById("root"));