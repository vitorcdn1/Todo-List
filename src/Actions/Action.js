const modalAction = (value) => { return { type: value ? "SHOW_MODAL" : "HIDDE_MODAL" }}
const modalEditAction = (value, content) => {
    return { type: value ? "SHOW_EDIT_MODAL" : "HIDDE_EDIT_MODAL", payload: content}
}

const listAction = (type, value) => { return { type, payload: value}}

export {
    modalAction,
    modalEditAction,
    listAction
}