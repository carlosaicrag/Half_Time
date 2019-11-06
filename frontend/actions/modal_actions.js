export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_MODAL = 'CHANGE_MODAL'

export const openModal = (modal,url) => {
    if(!url){
        url = ""
    }
    debugger
    return({
        type: OPEN_MODAL,
        modal: modal,
        url: url
    })
}

export const changeModal = modal => {
    return({
        type: CHANGE_MODAL,
        modal:modal
    })
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

