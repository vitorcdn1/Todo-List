const modalAction = (value) => { return { type: value ? "SHOW_MODAL" : "HIDDE_MODAL" }}

const listAction = (type, value) => { return { type, payload: value}}

export {
    modalAction,
    listAction
}