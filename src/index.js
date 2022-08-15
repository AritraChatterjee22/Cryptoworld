import React from "react";
import ReactDOM from "react-dom";
 import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
 import App from './App';
import store from "./app/store";
import 'antd/dist/antd.min.css';


ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
        <Routes>
            
        <Route path="/*" element={<Provider store={store}> <App /> </Provider>}>
            
        </Route>
        </Routes>
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
