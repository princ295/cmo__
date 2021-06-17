import { ModalActionType } from "./reducer";

export const setModalStatus = (payload) => ({
  type: ModalActionType.SET_MODAL_STATUS,
  payload
})
