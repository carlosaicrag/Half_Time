import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"
import Root from "./components/root"

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // let preloadedState = undefined;

    // if(window.currentUser){
    //     preloadedState = {
    //         session:{
    //             currentUser: window.currentUser
    //         }
    //     }
    // }
    // const store = configureStore(preloadedState)
    const store = configureStore()

    ReactDOM.render(<Root store={store}></Root>, root);
});