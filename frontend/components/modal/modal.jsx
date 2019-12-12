import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/signIn_container'
import SignupFormContainer from '../session/signup_container';
import Youtube from "../news/youtube"

function Modal({ modal, closeModal, url }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case "youtube":
            component = <Youtube url={url}/>;
            break;
        default:
            return null;
    }

    let modalBackground;

    if(modal === "youtube"){
        debugger
        modalBackground = <div className="yoututbe" onClick={e => e.stopPropagation()}>
            {component}
        </div>
    }else{
        modalBackground = <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
        </div>
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="cover">
                {modalBackground}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    let modal;
    let url; 

    if (!state.ui.modal){
        modal = ""
        url = ""
    }else{
        modal = state.ui.modal.modal
        url = state.ui.modal.url
    }

    return {
        modal: modal,
        url:url
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);