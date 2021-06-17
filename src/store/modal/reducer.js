import produce from "immer";

export const ModalActionType = {
  SET_MODAL_STATUS: 'SET_MODAL_STATUS'
}

const initialModaltate = {
  visibal: undefined
}

export const modalReducer = produce((draft, action) => {
  switch(action.type){
    case ModalActionType.SET_MODAL_STATUS: 
      draft.visibal = action.payload;
      break;
    default: 
      break;
  }
}, initialModaltate)


