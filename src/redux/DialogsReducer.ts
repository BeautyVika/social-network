const SEND_MESSAGE = "dialogs/SEND-MESSAGE"

let initialState = {
    dialogs: [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Lucy'},
        {id: 4, name: 'Mum'},
        {id: 5, name: 'Julia'},
        {id: 6, name: 'Anastasia'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How is your education?'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hi'}
    ] as Array<MessageType>,
}
 const dialogsReducer = (state = initialState, action: DialogsActionType) : DialogReducerType => {

     switch(action.type) {
         case SEND_MESSAGE:
             let body = action.newMessageBody
         return {...state, messages: [...state.messages, {id: 7, message: body}]}
         default:
             return state
     }
}
//action
export const sendMessageAC = (newMessageBody: string) : SendMessageACType => {
    return {type: SEND_MESSAGE, newMessageBody: newMessageBody}as const
}
//types
export type DialogReducerType = typeof initialState
export type DialogsActionType = SendMessageACType
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
type SendMessageACType ={
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export default dialogsReducer