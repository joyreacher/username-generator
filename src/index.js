import './main.css'
//? Main npm installs
import React from "react"
import ReactDOM from "react-dom"

//? My Components
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import ErrorBoundary from './containers/Error'



ReactDOM.render(
    <>
        <Header />
            <ErrorBoundary>
                <Main> 
                </Main>
            </ErrorBoundary>
        <Footer />
    
    </>, document.querySelector("#app"))

if(module.hot){
    module.hot.accept()
}