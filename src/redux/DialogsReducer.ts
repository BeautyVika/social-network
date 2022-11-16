const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

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
}
type UpdateNewMessageBodyACType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}
export const sendMessageAC = () : SendMessageACType => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyACType => {
    return{
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

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
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your education?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ] as Array<MessageType>,
    newMessageBody: ''
}
export type DialogReducerType = typeof initialState
type ActionType = UpdateNewMessageBodyACType | SendMessageACType

 const dialogsReducer = (state = initialState, action: ActionType) : DialogReducerType => {

     switch(action.type) {
         case 'UPDATE-NEW-MESSAGE-BODY':
         return {
             ...state,
             newMessageBody: action.body
         }
         case 'SEND-MESSAGE':
             let body = state.newMessageBody
         return {
                 ...state,
                 newMessageBody: '',
                 messages: [...state.messages, {id: 7, message: body}]
             }
         default:
             return state
     }
}
export default dialogsReducer