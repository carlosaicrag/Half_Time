import React from "react"
import { connect } from "react-redux"
import { Redirect, Route, withRouter } from "react-router-dom"
import Modal from "../components/modal/modal"
import { openModal } from "../actions/modal_actions";

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser),
})

const mapDispatchToBanana = dispatch => {
    return({
        openModal: (modal) => dispatch(openModal(modal))
    })
}

// <AuthRoute path="" component ={} />

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component, openModal }) => {
    if(!loggedIn){
        openModal("login")
    }

    return<Route
        path={path}
        render={props => (
            loggedIn? <Component {...props} /> : <Redirect to="/"/>
        )
        }
    />
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps,mapDispatchToBanana)(Protected));